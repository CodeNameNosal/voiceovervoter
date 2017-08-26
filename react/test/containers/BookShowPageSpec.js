import BookShowPage from '../../src/containers/BookShowPage';
import MatchTile from '../../src/components/MatchTile';
import MatchForm from '../../src/components/MatchForm';

describe('BookShowPage', () => {
    let wrapper, fetchBookSpy, fetchMatchesSpy, deleteCurrentBookSpy;
    let myBook = { title: 'My Favorite Novel', author: 'Somebody Famous' };
    let myMatch = { params: { id: 5 } };

  beforeEach(() => {
    fetchBookSpy = spyOn(BookShowPage.prototype, 'fetchBook');
    fetchMatchesSpy = spyOn(BookShowPage.prototype, 'fetchMatches');
    deleteCurrentBookSpy = spyOn(BookShowPage.prototype, 'deleteCurrentBook');

    wrapper = mount( <BookShowPage match = {myMatch} /> )
  });

  it('should render a BookShowPage container component', () => {
    expect(wrapper.find(BookShowPage)).toBePresent()
  });

  it('should render a div with className of "ShowTile" ', () => {
    expect(wrapper.find('.ShowTile')).toBePresent()
  });

  it('should make fetch calls to the API endpoint upon mounting', () => {
    expect(fetchBookSpy).toHaveBeenCalled();
    expect(fetchMatchesSpy).toHaveBeenCalled();
  });

  it('should run the delete function when the delete icon is clicked', () => {
    expect(deleteCurrentBookSpy).not.toHaveBeenCalled();
    wrapper.find('.fa-times').simulate('click');
    expect(deleteCurrentBookSpy).toHaveBeenCalled();
  });

  it('should render the "Generate random voice" button', () => {
    expect(wrapper.find('button.generateButton')).toBePresent();
    expect(wrapper.find('button.generateButton').text()).toMatch('Generate random voice');
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      awaitingMatchForm: false,
      MatchFormPresent: false,
      book: {},
      relevantMatches: [],
      randomVoice: {
        url: undefined,
        booking: undefined,
        talentid: undefined,
        demographics: undefined
      }
    });
  });

  it("should render the book's title", () => {
    wrapper.setState({ book: myBook });
    expect(wrapper.find('.BookShowPage-title').text()).toEqual('"My Favorite Novel"')
  });

  it("should render the book's author", () => {
    wrapper.setState({ book: myBook });
    expect(wrapper.find('.BookShowPage-author').text()).toEqual('by Somebody Famous')
  });

  it('does not display MatchForm component upon page load', () => {
    expect(wrapper.find(MatchForm)).not.toBePresent();
  });

  it('display of MatchForm component dependent upon state', () => {
    wrapper.setState({ MatchFormPresent: false });
    expect(wrapper.find(MatchForm)).not.toBePresent();
    wrapper.setState({ MatchFormPresent: true });
    expect(wrapper.find(MatchForm)).toBePresent();
  });

  it ('should link to the edit page for specified book id', () => {
    expect(wrapper.find('a')).toHaveProp('href', '/books/5/edit');
  })
});

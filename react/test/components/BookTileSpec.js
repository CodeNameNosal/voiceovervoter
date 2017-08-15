import BookTile from '../../src/components/BookTile';
import { Link, BrowserRouter as Router } from 'react-router-dom';

describe('BookTile', () => {
  let wrapper;
  let exampleBook = {
    id: 1,
    title: 'Cooking for Beginners',
    author: 'Chef Yum'
  }

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <BookTile
          book={exampleBook}
        />
      </Router>
    )
  });

  it('should render a BookTile', () => {
    expect(wrapper.find(BookTile)).toBePresent()
  })

  it("should render the book's title", () => {
    expect(wrapper.find('#BookTile-title')).toBePresent();
    expect(wrapper.find('#BookTile-title').text()).toEqual('"Cooking for Beginners"')
  })

  it("should render the book's author", () => {
    expect(wrapper.find('#BookTile-author')).toBePresent();
    expect(wrapper.find('#BookTile-author').text()).toEqual('by Chef Yum')
  })

  it("should render the edit and delete button section", () => {
    expect(wrapper.find('.editAndDeleteIcons')).toBePresent();
  })

  it("should not render unexpected elements", () => {
    expect(wrapper.find('ul')).not.toBePresent();
  })

});

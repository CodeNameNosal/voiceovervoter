import BookShowPage from '../../src/containers/BookShowPage';
import MatchTile from '../../src/components/MatchTile';
import ButtonPlayer from '../../src/components/ButtonPlayer';
import { Link, BrowserRouter as Router } from 'react-router-dom';

describe('MatchTile', () => {
  let wrapper, individualDeleteSpy, DemoSpy;
  let exampleMatch = {
    book_id: 55,
    booking: "http://voicebunny.com/search/samples/L5I3MK",
    comment: "This is the greatest narrator ever!",
    created_at: "2017-08-14T18:47:06.814Z",
    demographics: "middleAgeMale",
    id: 46,
    talentid: "L5I3MK",
    updated_at: "2017-08-14T18:47:06.814Z",
    url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_L5I3MK_-_Sample_104519.mp3",
    user_id: 4
  }

  beforeEach(() => {
    individualDeleteSpy = spyOn(BookShowPage.prototype, "deleteMatch")
    DemoSpy = spyOn(BookShowPage.prototype, "readableDemo")
    wrapper = mount(
      <Router>
        <MatchTile
          key={exampleMatch.id}
          data={exampleMatch}
          deleteMatch={individualDeleteSpy}
          demo={DemoSpy}
        />
      </Router>
    )
  });

  it('should render a MatchTile', () => {
    expect(wrapper.find(MatchTile)).toBePresent()
  })

  it("should render the talentid", () => {
    expect(wrapper.find('h4')).toBePresent();
    expect(wrapper.find('h4').text()).toEqual('Narrator: L5I3MK');
  })

  it("should render one ButtonPlayer component", () => {
    expect(wrapper.find(ButtonPlayer)).toBePresent()
    expect(wrapper.find(ButtonPlayer).length).toBe(1);
  })

  it("should render the comment of that match", () => {
    expect(wrapper.find('.comment')).toBePresent();
    expect(wrapper.find('.comment').text()).toEqual('This is the greatest narrator ever!');
  })

  it("should render the demographics of that match", () => {
    expect(wrapper.find('.demographic')).toBePresent();
    expect(wrapper.find('.demographic').text()).toMatch('Demographic: ');
  })

  it("should run the delete function when the delete icon is clicked", () => {
    expect(individualDeleteSpy).not.toHaveBeenCalled();
    wrapper.find(".fa-times").simulate("click");
    expect(individualDeleteSpy).toHaveBeenCalled();
  })

  it("should not render unexpected elements", () => {
    expect(wrapper.find('ul')).not.toBePresent();
  })

});

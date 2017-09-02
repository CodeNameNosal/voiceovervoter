import ButtonPlayer from '../../src/components/ButtonPlayer';

describe('ButtonPlayer', () => {
  let wrapper, playSoundSpy;
  let exampleData = {
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
    playSoundSpy = spyOn(ButtonPlayer.prototype, 'playSound');

    wrapper = mount( <ButtonPlayer data={exampleData} /> )
  });

  it('should render a ButtonPlayer', () => {
    expect(wrapper.find(ButtonPlayer)).toBePresent()
  });

  it("should render one audio tag", () => {
    expect(wrapper.find('audio')).toBePresent();
    expect(wrapper.find('audio').length).toBe(1);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ playStatus: false });
  });

  it('should display the correct icon', () => {
    wrapper.setState({ playStatus: false });
    expect(wrapper.find('.fa-play')).toBePresent();
    expect(wrapper.find('.fa-stop')).not.toBePresent();
    wrapper.setState({ playStatus: true });
    expect(wrapper.find('.fa-stop')).toBePresent();
    expect(wrapper.find('.fa-play')).not.toBePresent();
  });

  it('should render dynamically named div', () => {
    expect(wrapper.find(`div#clip${exampleData.id}`)).toBePresent();
  });

  it('should attach playSound function to dynamically named div', () => {
    expect(playSoundSpy).not.toHaveBeenCalled();
    wrapper.find(`div#clip${exampleData.id}`).simulate('click');
    expect(playSoundSpy).toHaveBeenCalled();
  });

});

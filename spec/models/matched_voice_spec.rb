require 'rails_helper'

RSpec.describe MatchedVoice, type: :model do
  it { should have_valid(:comment).when("This narrator is perfect for this book!") }
  it { should_not have_valid(:comment).when('', nil) }

  it { should have_valid(:talentid).when("123ABC") }

  it { should have_valid(:url).when("www.fakelink.com/fake.mp3") }

  it { should have_valid(:booking).when("www.fakelink.com/fake.html") }
end

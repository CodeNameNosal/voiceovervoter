require 'rails_helper'

RSpec.describe Voice, type: :model do
  it { should have_valid(:talentid).when("123ABC") }
  it { should_not have_valid(:talentid).when('', nil) }

  it { should have_valid(:sound).when("www.fakelink.com/fake.mp3") }
  it { should_not have_valid(:sound).when('', nil) }

  it { should have_valid(:booking).when("www.fakelink.com/fake.html") }
end

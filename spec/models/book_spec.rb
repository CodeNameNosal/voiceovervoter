require 'rails_helper'

RSpec.describe Book, type: :model do
  it { should have_many(:matched_voices) }

  it { should have_valid(:title).when("The Big Book of Books") }
  it { should_not have_valid(:title).when('', nil) }

  it { should have_valid(:author).when("Jane Doe") }
  it { should_not have_valid(:author).when('', nil) }
end

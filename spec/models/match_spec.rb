require 'rails_helper'

RSpec.describe Match, type: :model do
  it { should have_valid(:comment).when("This narrator is perfect for this book!") }
  it { should_not have_valid(:comment).when('', nil) }
end

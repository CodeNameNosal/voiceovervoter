require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:books) }
  it { should have_many(:matched_voices) }

  it { should have_valid(:username).when('Word', '1234', 'QWErty123')}
  it { should_not have_valid(:username).when('', nil)}

  it { should have_valid(:email).when('example@example.com', 'spec_test@rails.net')}
  it { should_not have_valid(:email).when('', nil, 'invalid', 'wrong.com')}

  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'first'
    user.password_confirmation = 'second'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end
end

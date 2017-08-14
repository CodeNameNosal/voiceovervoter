require "rails_helper"

feature "user logs in" do
  before(:each) do
    @bob = User.create(username: "bob", email: "test@test.com", password: "12345678")
  end

  scenario "user enters valid login credentials" do
    visit new_user_session_path

    fill_in "Email", with: @bob.email
    fill_in "Password", with: @bob.password

    click_button "login_button"

    expect(page).to have_content("Signed in successfully")
  end

  scenario "user sees their username displayed after successfully logging in" do
    visit new_user_session_path

    fill_in "Email", with: @bob.email
    fill_in "Password", with: @bob.password

    click_button "login_button"

    expect(page).to have_content(@bob.username)
  end

  scenario "user sees error when attempting invalid login" do
    visit new_user_session_path

    fill_in "Email", with: @bob.email
    fill_in "Password", with: @bob.password + "WRONG"

    click_button "login_button"

    expect(page).to have_content("Invalid Email or password")
  end
end

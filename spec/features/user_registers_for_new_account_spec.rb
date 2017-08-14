require "rails_helper"

feature "user registers" do
  scenario "user can visit sign up page" do
    visit "/"

    click_on "Sign Up"

    expect(page).to have_content("Sign up")
    expect(page).to have_content("Email")
    expect(page).to have_content("Username")
    expect(page).to have_content("Password")
    expect(page).to have_content("Password confirmation")
  end

  scenario "user successfully creates account" do
    visit "/"
    click_on "Sign Up"

    fill_in "Email", with: "test@test.com"
    fill_in "Username", with: "bob"
    fill_in "Password", with: "12345678"
    fill_in "Password confirmation", with: "12345678"

    click_button "Sign up"

    expect(page).to have_content("signed up successfully")
  end

  scenario "user unsuccessful in registration if missing password confirmation" do
    visit "/"
    click_on "Sign Up"

    fill_in "Username", with: "TestUser"
    fill_in "Password", with: "TestUserPassword"

    click_button "Sign up"

    expect(page).to have_content("Password confirmation doesn't match Password")
    expect(page).to have_content("prohibited this user from being saved")
  end

  scenario "user receives error for entering an invalid email" do
    visit new_user_registration_path

    fill_in "Email", with: "testATtestDOTcom"
    fill_in "Password", with: "12345678"
    fill_in "Password confirmation", with: "12345678"

    click_button "Sign up"

    expect(page).to have_content("Email is invalid")
  end
end

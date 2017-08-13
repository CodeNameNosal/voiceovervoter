require 'rails_helper'

RSpec.describe Api::V1::BooksController, type: :controller do
  before(:each) do
    @bob = User.create(username: "bob", email: "test@test.com", password: "12345678")
    @book_one = Book.create(title: 'Book 1', author: 'Author 1', user: @bob)
    @book_two = Book.create(title: 'Book 2', author: 'Author 2', user: @bob)
    @book_three = Book.create(title: 'Book 3', author: 'Author 3', user: @bob)
  end

  after(:each) do
    sign_out @bob
  end

  describe "GET#index" do
    it "should return the correct list of books" do
      sign_in @bob
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 3
      expect(returned_json.last["title"]).to eq 'Book 1'
      expect(returned_json.first["author"]).to eq 'Author 3'
    end
  end

  describe 'GET#show' do
    it 'should render json with the correct book returned' do
      get :show, params: { id: @book_one.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json).to be_a Hash

      expect(returned_json["book"]["id"]).to eq @book_one.id
      expect(returned_json["book"]["title"]).to eq @book_one.title
      expect(returned_json["book"]["user_id"]).to eq @bob.id
    end
  end
end

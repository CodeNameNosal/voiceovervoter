require 'rails_helper'

RSpec.describe Api::V1::BooksController, type: :controller do
  describe "GET#index" do
    let!(:book_1) { Book.create(title: 'Book 1', author: 'Author 1') }
    let!(:book_2) { Book.create(title: 'Book 2', author: 'Author 2') }
    let!(:book_3) { Book.create(title: 'Book 3', author: 'Author 3') }

    it "should return a list of books" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json.length).to eq 3
      expect(returned_json.first["title"]).to eq 'Book 1'
      expect(returned_json.last["author"]).to eq 'Author 3'
    end
  end
end

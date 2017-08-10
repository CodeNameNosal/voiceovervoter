# require 'rails_helper'
#
# RSpec.describe Api::V1::BooksController, type: :controller do
#
#   before(:each) do
#     @bob = User.create(username: "bob", email: "test@test.com", password: "12345678")
#     Book.create(title: 'Book 1', author: 'Author 1', user_id:@bob)
#     Book.create(title: 'Book 2', author: 'Author 2', user_id:@bob)
#     Book.create(title: 'Book 3', author: 'Author 3', user_id:@bob)
#   end
#
#   describe "GET#index" do
#     it "should return a list of books" do
#       sign_in @bob
#       get :index
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq "application/json"
#       expect(returned_json.length).to eq 3
#       expect(returned_json.first["title"]).to eq 'Book 1'
#       expect(returned_json.last["author"]).to eq 'Author 3'
#     end
#   end
# end

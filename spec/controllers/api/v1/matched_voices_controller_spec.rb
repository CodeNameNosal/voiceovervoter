require 'rails_helper'

RSpec.describe Api::V1::MatchedVoicesController, type: :controller do
  before(:each) do
    @bob = User.create(username: "bob", email: "test@test.com", password: "12345678")
    @book = Book.create(title: 'Book 1', author: 'Author 1', user: @bob)
    @match_one = MatchedVoice.create(
      user: @bob,
      book: @book,
      talentid: "5FC7984",
      url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_5FC7984_-_Sample_36393.mp3",
      booking: "http://voicebunny.com/search/samples/5FC7984",
      comment: "This voice is perfect for the tone of this book",
      demographics: "youngAdultMale"
    )
    @match_two = MatchedVoice.create(
      user: @bob,
      book: @book,
      talentid: "J69RHAK",
      url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_J69RHAK_-_Sample_106655.mp3",
      booking: "http://voicebunny.com/search/samples/J69RHAK",
      comment: "Just meh",
      demographics: "youngAdultFemale"
    )
    @match_three = MatchedVoice.create(
      user: @bob,
      book: @book,
      talentid: "32J898K",
      url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_32J898K_-_Sample_11617.mp3",
      booking: "http://voicebunny.com/search/samples/32J898K",
      comment: "Neato keen!",
      demographics: "teenageGirl"
    )
  end

  after(:each) do
    sign_out @bob
  end

  describe 'GET#index' do
    it 'should only return the matches for a single book' do
      get :index, params: { book_id: @book.id }
      returned_json = JSON.parse(response.body)

      returned_json["relevantMatches"].each_with_index do |match, index|
        expect(returned_json["relevantMatches"][index]["book_id"]).to eq match["book_id"]
      end
    end
    it 'should render json with the matched voices to a specific book' do
      get :index, params: { book_id: @book.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(returned_json).to be_a Hash

      expect(returned_json["relevantMatches"].length).to eq 3
      expect(returned_json["relevantMatches"].last["id"]).to eq @match_one.id
      expect(returned_json["relevantMatches"].last["user_id"]).to eq @bob.id
      expect(returned_json["relevantMatches"].last["book_id"]).to eq @book.id
      expect(returned_json["relevantMatches"].last["talentid"]).to eq @match_one.talentid
      expect(returned_json["relevantMatches"].last["url"]).to eq @match_one.url
      expect(returned_json["relevantMatches"].last["booking"]).to eq @match_one.booking
      expect(returned_json["relevantMatches"].last["comment"]).to eq @match_one.comment
    end
  end
end

class Api::V1::VoicebunniesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    men = ['childBoy', 'teenageBoy', 'youngAdultMale', 'middleAgeMale', 'seniorMale']
    women = ['childGirl', 'teenageGirl', 'youngAdultFemale', 'middleAgeFemale', 'seniorFemale']


    gender = request.body.read

    case gender
    when 'Male'
      demographic = men.sample
    when 'Female'
      demographic = women.sample
    when 'No preference'
      demographic = nil
    end

    @conn = Faraday.new(:url =>('https://'+ENV["VOICEBUNNY_ID"]+ ':'+ENV["VOICEBUNNY_API_TOKEN"]+ '@api.voicebunny.com'),:ssl => {:verify => false}) do |builder|
      builder.use Faraday::Request::Multipart
      builder.use Faraday::Request::UrlEncoded
      builder.use Faraday::Response::ParseJson
      builder.use Faraday::Adapter::NetHttp
    end
    @resp = @conn.post '/samples/search.json', {
      genderAndAge: demographic,
      language: 'eng-us',
      purpose: 'audiobooksPodcasts',
      size: "999"
    }

    randomVoice = @resp.body["samples"].sample
    render json: { randomVoice: randomVoice }
  end
end

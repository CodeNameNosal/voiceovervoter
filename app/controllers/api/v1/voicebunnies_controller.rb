class Api::V1::VoicebunniesController < ApplicationController
  def show
    @conn = Faraday.new(:url =>('https://'+ENV["VOICEBUNNY_ID"]+ ':'+ENV["VOICEBUNNY_API_TOKEN"]+ '@api.voicebunny.com'),:ssl => {:verify => false}) do |builder|
      builder.use Faraday::Request::Multipart
      builder.use Faraday::Request::UrlEncoded
      builder.use Faraday::Response::ParseJson
      builder.use Faraday::Adapter::NetHttp
    end
    @resp = @conn.post '/samples/search.json', {
      language: 'eng-us',
      purpose: 'audiobooksPodcasts',
      size: "999"
    }

    randomVoice = @resp.body["samples"].sample
    render json: { randomVoice: randomVoice }
  end
end

class Api::V1::MatchedVoicesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @relevantMatches = MatchedVoice.where({ book_id: params[:book_id] }).where( user_id: current_user.id ).order(updated_at: :desc)

    render json: { relevantMatches: @relevantMatches }
  end


  def create
    new_matched_voice_hash = JSON.parse(request.body.read)
    @new_entry = MatchedVoice.new({
      book_id: new_matched_voice_hash["book_id"],
      url: new_matched_voice_hash["url"],
      talentid: new_matched_voice_hash["talentid"],
      booking: new_matched_voice_hash["booking"],
      comment: new_matched_voice_hash["comment"],
      user_id: current_user.id
    })
    if @new_entry.save
      render json: @new_entry, adapter: :json
    end
  end

end

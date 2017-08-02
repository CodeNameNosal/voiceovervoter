class Api::V1::MatchedVoicesController < ApplicationController
  def index
    @relevantMatches = MatchedVoice.where({ book_id: params[:book_id] })

    render json: { relevantMatches: @relevantMatches }
  end
end

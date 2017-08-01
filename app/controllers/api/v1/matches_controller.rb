class Api::V1::MatchesController < ApplicationController
  def index
    @relevantMatches = Match.where({ book_id: params[:book_id] })

    render json: { relevantMatches: @relevantMatches }, include: [:voice]
  end
end

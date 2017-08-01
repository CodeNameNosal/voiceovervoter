class Api::V1::MatchesController < ApplicationController
  def index
    # @book = Book.find(params[:id])

    @relevantMatches = Match.where({ book_id: params[:book_id] })


    # @relevantMatches = @book.matches
    render json: { relevantMatches: @relevantMatches }
  end
end

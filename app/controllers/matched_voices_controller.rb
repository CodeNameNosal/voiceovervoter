class MatchedVoicesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def destroy
    @match = MatchedVoice.find(params[:id])
    @book = @match.book
    @match.destroy
    render json: {matches: MatchedVoice.where({ book_id: @book }).order(updated_at: :desc)}, adapter: :json
  end

  def update
    @match = MatchedVoice.find(params[:id])
    updated_comment = request.body.read
    @match.update(comment: updated_comment)
  end

end

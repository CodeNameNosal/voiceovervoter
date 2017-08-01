class Api::V1::MatchesController < ApplicationController
  def index
    @relevantMatches = Match.where({ book_id: params[:book_id] })

    render json: { relevantMatches: @relevantMatches }
  end
end




# class Match < ActiveRecord::Base
#   belongs_to :voices, :inverse_of => :match
# end
#
# class Voice < ActiveRecord::Base
#   has_many :match, :inverse_of => :voices
# end

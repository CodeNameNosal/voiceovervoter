class Match < ApplicationRecord
  belongs_to :book
  # belongs_to :voice
  belongs_to :voice, :inverse_of => :matches

  validates :comment, presence: true
end

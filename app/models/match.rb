class Match < ApplicationRecord
  belongs_to :book
  belongs_to :voice

  validates :comment, presence: true
end

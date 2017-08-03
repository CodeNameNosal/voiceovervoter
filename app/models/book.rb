class Book < ApplicationRecord
  has_many :matched_voices
  belongs_to :user

  validates :title, presence: true
  validates :author, presence: true
end

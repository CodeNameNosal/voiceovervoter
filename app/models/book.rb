class Book < ApplicationRecord
  has_many :matched_voices

  validates :title, presence: true
  validates :author, presence: true
end

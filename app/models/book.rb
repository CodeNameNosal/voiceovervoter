class Book < ApplicationRecord
  has_many :matches
  has_many :voices, through: :matches

  validates :title, presence: true
  validates :author, presence: true
end

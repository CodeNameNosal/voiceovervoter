class Voice < ApplicationRecord
  has_many :matches
  has_many :books, through: :matches

  validates :talentid, presence: true
  validates :sound, presence: true
end

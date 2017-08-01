class Voice < ApplicationRecord
  has_many :matches, inverse_of: :voice
  has_many :books, through: :matches

  validates :talentid, presence: true
  validates :sound, presence: true
end

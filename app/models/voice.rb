class Voice < ApplicationRecord
  validates :talentid, presence: true
  validates :sound, presence: true
end

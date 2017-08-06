class Book < ApplicationRecord
  has_many :matched_voices
  belongs_to :user

  validates :title, presence: true
  validates :author, presence: true

  def self.search(query)
    query = "%#{query}%"
    where("(title like ? or author like ?)", query, query)
  end
end

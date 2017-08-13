class Book < ApplicationRecord
  has_many :matched_voices, dependent: :destroy
  belongs_to :user

  validates :title, presence: true
  validates :author, presence: true

  def self.search(query)
    query = "%#{query}%"
    where("(title ilike ? or author ilike ?)", query, query)
  end
end

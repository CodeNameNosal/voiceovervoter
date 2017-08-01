class BookSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :updated_at, :title, :author
  has_many :matches
end

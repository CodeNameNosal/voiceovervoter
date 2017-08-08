class AddCoverAndGdcoverToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :cover, :string, :default => "http://res.cloudinary.com/codenamenosal/image/upload/v1502145061/book-750698_960_720_kwx6ie.jpg"
    add_column :books, :goodreads_cover, :boolean, :default => false
  end
end

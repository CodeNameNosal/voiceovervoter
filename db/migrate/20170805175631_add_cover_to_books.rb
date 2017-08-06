class AddCoverToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :cover, :string, :default => "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  end
end

class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.belongs_to :user, null: false
      
      t.string :title, null: false
      t.string :author, null: false

      t.timestamps
    end
  end
end
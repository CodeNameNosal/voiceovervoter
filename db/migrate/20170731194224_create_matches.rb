class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.belongs_to :book, null: false
      t.belongs_to :voice, null: false

      t.string :comment, null: false
      t.timestamps
    end
  end
end

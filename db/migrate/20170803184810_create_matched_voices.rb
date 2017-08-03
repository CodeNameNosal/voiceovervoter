class CreateMatchedVoices < ActiveRecord::Migration[5.1]
  def change
    create_table :matched_voices do |t|
      t.belongs_to :book, null: false
      t.belongs_to :user, null: false

      t.string :talentid, null: false
      t.string :url, null: false
      t.string :comment, null: false
      t.string :booking

      t.timestamps
    end
  end
end

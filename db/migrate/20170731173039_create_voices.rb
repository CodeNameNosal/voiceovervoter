class CreateVoices < ActiveRecord::Migration[5.1]
  def change
    create_table :voices do |t|
      t.string :talentid, null: false
      t.string :sound, null: false
      t.string :booking

      t.timestamps
    end
  end
end

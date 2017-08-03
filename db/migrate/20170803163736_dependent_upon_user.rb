class DependentUponUser < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :user_id, :integer
    add_column :matched_voices, :user_id, :integer
  end
end

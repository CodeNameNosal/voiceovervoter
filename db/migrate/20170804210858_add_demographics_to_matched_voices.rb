class AddDemographicsToMatchedVoices < ActiveRecord::Migration[5.1]
  def change
    add_column :matched_voices, :demographics, :string
  end
end

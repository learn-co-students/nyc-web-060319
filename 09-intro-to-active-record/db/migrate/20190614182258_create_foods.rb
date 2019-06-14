class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.integer :feral_cat_id
      t.integer :nice_person_id
    end
  end
end

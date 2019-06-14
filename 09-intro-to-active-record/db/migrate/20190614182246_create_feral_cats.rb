class CreateFeralCats < ActiveRecord::Migration[5.2]
  def change
    create_table :feral_cats do |t|
      t.string :name
      t.integer :smellyness
    end
  end
end

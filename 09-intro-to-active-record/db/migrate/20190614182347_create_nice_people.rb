class CreateNicePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :nice_people do |t|
      t.string :name
    end
  end
end

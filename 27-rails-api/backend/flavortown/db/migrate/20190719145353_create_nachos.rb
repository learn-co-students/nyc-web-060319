class CreateNachos < ActiveRecord::Migration[5.2]
  def change
    create_table :nachos do |t|
      t.string :cheese
      t.string :ingredients

      t.timestamps
    end
  end
end

class CreateNachos < ActiveRecord::Migration[5.2]
  def change
    create_table :nachos do |t|
      t.string :name
      t.boolean :cheese

      t.timestamps
    end
  end
end

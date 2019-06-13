class AddMaxOToBars < ActiveRecord::Migration[5.2]
  def change
    add_column(:bars, :max_occ, :integer)
  end
end

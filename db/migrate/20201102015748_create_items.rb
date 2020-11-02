class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.decimal :price
      t.string :brand
      t.column :store_id, :integer

      t.integer :price_range
      t.integer :clothing_category
      t.integer :weather_category
      t.integer :utility_category
      t.integer :wear_frequency
      t.integer :discard_reason

      t.date :date_purchased
      t.date :date_discarded
      t.timestamps
    end

    create_table :stores do |t|
      t.string :name
      t.timestamps
    end
  end
end

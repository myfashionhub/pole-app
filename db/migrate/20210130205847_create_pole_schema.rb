class CreatePoleSchema < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :stage_name
      t.string :email
      t.string :hashed_password
      t.string :biography
      t.timestamps
    end

    create_table :pole_moves do |t|
      t.string :name
      t.string :description
      t.string :aliases
      t.string :pole_modes
      t.string :level
      t.string :image_url
      t.string :video_url
      t.timestamps
    end

    create_table :tags do |t|
      t.string :name
      t.string :description
    end

    create_table :history do |t|
      t.string :description
      t.integer :user_id
      t.integer :pole_move_id
      t.date :practiced

      t.timestamps
    end

    create_table :tags_pole_moves do |t|
      t.integer :tag_id
      t.integer :pole_move_id
      t.timestamps
    end
  end
end

class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :date
      t.string :photo1
      t.string :photo2
      t.string :photo3
      t.integer :likes
      t.string :coordinates
      t.timestamps
    end
  end
end

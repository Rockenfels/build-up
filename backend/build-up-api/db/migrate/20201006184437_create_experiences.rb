class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :date
      t.string :photo
      t.integer :likes, default: 0
      t.string :coordinates, default: 'None'
      t.belongs_to :category
      t.timestamps
    end
  end
end

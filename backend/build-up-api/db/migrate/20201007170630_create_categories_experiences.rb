class CreateCategoriesExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :categories_experiences do |t|
      t.belongs_to :experience
      t.belongs_to :category
    end
  end
end

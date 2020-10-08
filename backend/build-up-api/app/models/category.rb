class Category < ApplicationRecord
  has_and_belongs_to_many :experiences

  validates :name, uniqueness: true
end

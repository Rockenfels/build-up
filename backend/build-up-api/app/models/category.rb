class Category < ApplicationRecord
  has_many :experiences

  validates :name, uniqueness: true
end

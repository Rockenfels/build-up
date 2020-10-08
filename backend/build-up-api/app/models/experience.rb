class Experience < ApplicationRecord
  has_and_belongs_to_many :categories
  validates :description, :location, :date, presence: true
  validates :title, uniqueness:true
  validate :coordinateValidator

 def coordinateValidator
   coordinateExp = /^-*\d{1,3}\.*\d{6}\s-*\d{1,3}\.*\d{6}\b/

   if !coordinates.present? || !coordinates.match(coordinateExp)
     errors.add(:coordinate, 'invalid coordinate format')
   end
 end
end

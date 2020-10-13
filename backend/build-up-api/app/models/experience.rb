class Experience < ApplicationRecord
  belongs_to :category
  validates :description, :location, :date, presence: true
  validates :title, uniqueness:true
  validates :coordinates, presence:true

#for later
 # def coordinateValidator
 #   coordinateExp = /^-*\d{1,3}\.*\d{6}\s-*\d{1,3}\.*\d{6}\b/
 #
 #   if coordinates == 'None' !coordinates.match(coordinateExp)
 #     errors.add(:coordinate, 'invalid coordinate format')
 #   end
 # end
end

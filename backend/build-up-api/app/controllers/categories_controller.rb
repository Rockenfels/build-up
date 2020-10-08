class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categoriess, except: [:updated_at]
  end

  def show
    category = Category.find_by(id: params[:id])
    if category
      render json: category, except: [:updated_at]
    else
      render json: { message: 'Category not found' }
    end
end

def create
  #brings in exerience attributes from params and then adds categories separately
  experience = Experience.new(cat_params)
  experience.categories << params[:experience][:categories]

  #Tests to make sure the data passed to create the experience is valid
  if experience.save
    render json: {experience: experience, message: 'Experience created successfully!' }
  else
    render json: { message: 'Invalid category name', errors: experience.errors.full_messages_for(:coordinates)}
  end
end

#strong params for categories
private
  def cat_params
    params.require(:experience).permit(:title, :description, :location, :date, :photo, :coordinates)
  end
end

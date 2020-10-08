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
  experience = Experience.new(exp_params)
  #figure out if you need to put the categories in as an array of strings, or as category objects
  if experience.save
    render json: experience
  else
    render json: { message: 'Invalid category name', errors: experience.errors.full_messages_for(:coordinates)}
  end
end

private
  def exp_params
    params.require(:experience).permit(:title, :description, :location, :date, :photo, :categories, :coordinates)
  end
end

class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories, except: [:updated_at]
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
  category = Category.new(cat_params)

  #Tests to make sure the data passed to create the experience is valid
  if category.save
    render json: {experience: category, message: 'Category created successfully!' }
  else
    render json: { message: 'Invalid category name', errors: category.errors.full_messages()}
  end
end

def search
  terms = params[:terms]
  results = Experience.where('category = ?', terms)
  binding.pry()
  if !results.empty?
    render json: results;
  else
    render json: { message: 'No results found, please try different terms'}
  end
end

#strong params for categories
private
  def cat_params
    params.require(:category).permit(:name)
  end
end

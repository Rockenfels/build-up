require 'pry'
class ExperiencesController < ApplicationController
  def index
    experiences = Experience.all
    render json: experiences, except: [:updated_at]
  end

  def show
    experience = Experience.find_by(id: params[:id])
    if experience
      render json: experience, except: [:updated_at]
    else
      render json: { message: 'Experience not found' }
    end
end

def create

  experience = Experience.new(exp_params)
  experience.coordinates = 'None' if experience.coordinates === ""
  binding.pry()
  #figure out if you need to put the categories in as an array of strings, or as category objects
  if experience.save
    render json: experience
  else
    render json: { message: 'Invalid experience data', errors: experience.errors.full_messages()}
  end
end

def newest
  results = Experience.order(created_at: :desc).limit(5);
  render json: results
end

def mostLiked
  results = Experience.order(liked: :desc).limit(5);
  render json: results
end

private
  def exp_params
    params.require(:experience).permit(:title, :description, :location, :date, :photo, :categories, :coordinates)
  end

end

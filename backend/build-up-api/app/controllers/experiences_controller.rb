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
  #figure out if you need to put the categories in as an array of strings, or as category objects
  if experience.save
    render json: {experience: experience, message: 'experience created'}
  else
    render json: { message: 'Invalid experience data', errors: experience.errors.full_messages()}
  end
end

def search
  scope = params[:search][:scope] + ' = ?'
  terms = params[:search][:terms]
  result = Experience.where(scope, terms)
  if !result.nil?
    render json: { message: 'Results found!', result: result}
  else
    render json: { message: 'No results found, please try different terms'}
  end
end

def newest
  results = Experience.order(created_at: :desc).limit(5)
  render json: { message: "Results found", results: results}
end

def mostLiked
  results = Experience.order(liked: :desc).limit(5)
end

private
  def exp_params
    params.require(:experience).permit(:title, :description, :location, :date, :photo, :categories, :coordinates)
  end

end

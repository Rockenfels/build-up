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
  terms = params[:terms]
  # terms.each do |term|
  #   case term
  #   when term.
  #
  #   end
  # end
end

private
  def exp_params
    params.require(:experience).permit(:title, :description, :location, :date, :photo, :categories, :coordinates)
  end

end

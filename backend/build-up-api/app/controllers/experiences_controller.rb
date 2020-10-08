class ExperiencesController < ApplicationController
  def index
    experiences = Expernience.all
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
  experience.categories = params[:categories]
  if experience.save
    render json: experience
  else
    render json: { message: 'Invalid experience data', errors: experience.errors.full_messages_for(:coordinates)}
  end
end

private
  def exp_params
    params.require(:experience).permit(:title, :description, :location, :date, :photo, :categories, :coordinates)
  end

end

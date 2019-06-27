class RappersController < ApplicationController
  def index
    @rappers = Rapper.all 
  end

  def show
    @rapper = Rapper.find(params[:id])
  end

  def edit
  end

  def new
  end
end

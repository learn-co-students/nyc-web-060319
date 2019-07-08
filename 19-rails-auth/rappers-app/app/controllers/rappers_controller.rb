class RappersController < ApplicationController
  before_action :authorized?

  def index
      @rappers = Rapper.all  
  end

  def show
    @user = user 
    @rapper = Rapper.find(params[:id])
  end

  def edit
    @rapper = Rapper.find(params[:id])
  end

  def update
    rapper = Rapper.find(params[:id])
    rapper.update(rapper_params)
    redirect_to rapper_path(rapper)
  end



  def new
    @rapper = Rapper.new
  end

  def create
    @rapper = Rapper.new(rapper_params)
    # byebug
    if @rapper.valid? 
      @rapper.save
      redirect_to rapper_path(@rapper)
    else
     flash[:message] = @rapper.errors.full_messages[0]
      render :new
    end
  end




  private

  def rapper_params
    params.require(:rapper).permit(:name, :age)
  end
end

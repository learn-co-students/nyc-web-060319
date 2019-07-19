class Api::V1::NachosController < ApplicationController

  def index
    #model
    @nachos = Nacho.all
    serialized_data = NachoSerializer.new(@nachos).serialized_json
    #response
    render json: serialized_data
  end

  def create
    # params?
    # byebug
    #model
    @nacho = Nacho.create(name: params[:nachoName])
    #response
    # serialized_data = NachoSerializer.new(@nacho).serialized_json
    render json: @nacho
  end



end

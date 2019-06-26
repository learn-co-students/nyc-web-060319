class RappersController < ApplicationController
  # index action
    get "/rappers" do
      @rappers = Rapper.all
      erb :"rappers/index"
    end

    #new action
    get "/rappers/new" do
      erb :"rappers/new"
    end

    #create action
    post "/rappers" do
      rapper = Rapper.create(params[:rapper])
      redirect "/rappers/#{rapper.id}" #=> This will send a GET request to the resource "/rappers/4"
    end

    #show action
    get "/rappers/:id" do
      @rapper = Rapper.find(params[:id])
      erb :"rappers/show"
    end

    #edit action
    get "/rappers/:id/edit" do
      @rapper = Rapper.find(params[:id])
      erb :"/rappers/edit"
    end

    #update action
    patch "/rappers/:id" do
      rapper = Rapper.find(params[:id])
      rapper.update(params[:rapper])
      redirect "/rappers/#{rapper.id}"
    end

    #delete
    # we do not want our user to be able to send this request by mistake
    # so we should have something like a delete button or link that will send the request for us 
    delete "/rappers/:id" do

    end








end

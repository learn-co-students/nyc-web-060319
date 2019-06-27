class SongsController < ApplicationController 

    #index action
     get "/songs" do 
        erb :"songs/index"
     end

     
     #new action 
     get "/songs/new" do 
        @rappers = Rapper.all 
        erb :"songs/new"
     end

     #show action 
     get "/songs/:id" do 
        @song = Song.find(params[:id])
        erb :"songs/show"
     end
     
    #create action 
    post "/songs" do 
        binding.pry
        song = Song.create(params[:song])
        redirect "/songs/#{song.id}"
    end
    
end
require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end


#anatomy of a route
# domain/resource
  get "/" do
    erb :welcome
  end

  get "/chett" do
    erb :chettsdabest
  end


# index action
  get "/rappers" do
    @rappers = Rapper.all
    erb :rappers
  end

  # what do we do once the rapper is created?
  #new action
  get "/rappers/new" do
    erb :new
  end

end

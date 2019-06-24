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

  get "/students" do
    @rappers = Rapper.all
    erb :rappers
  end

end

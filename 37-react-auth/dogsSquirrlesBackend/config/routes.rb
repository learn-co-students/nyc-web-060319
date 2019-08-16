Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/retrieve_user', to: 'auth#retrieve'
      post '/signup', to: 'users#create'
    end
  end

end
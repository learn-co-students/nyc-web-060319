Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/bennie', to:"api/v1/nachos#index"
  get '/yaboix', to:"api/v1/nachos#show"


  namespace :api do
    namespace :v1 do
      resources :nachos
    end
  end

end

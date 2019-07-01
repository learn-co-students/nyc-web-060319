Rails.application.routes.draw do
  #writing routes: 
  #start with: type of request/HTTP Verb
  get "/rappers", to: "rappers#index", as: "rappers" #evaluates to: rappers_path
  get "/rappers/new", to: "rappers#new"
  get "/rappers/:id/edit", to: "rappers#edit"
  get "/rappers/:id", to: "rappers#show", as: "rapper" #evaluates to: rapper_path
  post "/rappers", to: "rappers#create"
  patch "/rappers/:id", to: "rappers#update"



  #Song Routes
  get "/songs/new", to: "songs#new"
  post "/songs", to: "songs#create"
end

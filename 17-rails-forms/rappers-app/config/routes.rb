Rails.application.routes.draw do
  #writing routes: 
  #start with: type of request/HTTP Verb
  get "/rappers", to: "rappers#index"
  get "/rappers/new", to: "rappers#new"
  get "/rappers/:id", to: "rappers#show"
end

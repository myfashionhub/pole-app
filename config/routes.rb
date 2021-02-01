Rails.application.routes.draw do
  root 'base#index'

  get '/login' => 'users#show'
  get '/pole-tricks' => 'pole_moves#index'
  get '/pole_moves/search' => 'pole_moves#search'
  get '/users/:user_id/moves' => 'history#index'
  post '/users/:user_id/moves' => 'history#create'

  resources :users, only: [:show, :create]
  resources :pole_moves, only: [:show, :create]
  resources :tags, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

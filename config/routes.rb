Rails.application.routes.draw do
  root 'base#index'

  get '/login' => 'users#show'
  get '/pole-tricks' => 'pole_moves#index'
  get '/pole_moves/search' => 'pole_moves#search'

  resources :users, only: [:show, :create]
  resources :pole_moves, only: [:show, :create]
  resources :history, only: [:index, :create]
  resources :tags, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

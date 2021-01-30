Rails.application.routes.draw do
  root 'base#index'

  resources :users, only: [:show, :create]
  resources :pole_moves, only: [:index, :show, :create]
  resources :history, only: [:index, :create]
  resources :tags, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :categories, only: [:show, :index, :create]
  resources :experiences, only: [:show, :index, :create]
  get '/experiences/search', to: 'experiences#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

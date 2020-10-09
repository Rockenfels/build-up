Rails.application.routes.draw do
  resources :categories, only: [:show, :index, :create]
  resources :experiences, only: [:show, :index, :create]
  post  '/experiences/search', to: 'experiences#search'
  post  '/categories/search', to: 'categories#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

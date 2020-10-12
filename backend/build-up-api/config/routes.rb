Rails.application.routes.draw do
  resources :categories, only: [:show, :index, :create]
  resources :experiences, only: [:show, :index, :create]
  get '/newest', to: 'experiences#newest'
  get  '/most_liked', to: 'experiencs#mostLiked'
  post  '/categories_search', to: 'categories#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

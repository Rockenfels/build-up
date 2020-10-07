Rails.application.routes.draw do
  resources :categories, except: [:edit, :update, :delete]
  resources :experiences, except: [:edit, :update, :delete]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

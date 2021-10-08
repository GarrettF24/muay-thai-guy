Rails.application.routes.draw do
  resources :comments
  resources :users, only: %i[create index show]
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :posts do
    resources :comments
  end
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

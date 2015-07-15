Rails.application.routes.draw do
  root "static_pages#root"

  resources :todos, defaults: {format: :json}, only: [:index, :show, :create, :destroy, :update]
end

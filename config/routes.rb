Rails.application.routes.draw do
  devise_for :users
  root to: "examples#index"

  resources :books, :only => [:new, :create]

  get '/books/:id', to: "examples#index"

  namespace :api do
    namespace :v1 do
      resources :books do
        resources :matched_voices
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :voicebunnies
    end
  end

end

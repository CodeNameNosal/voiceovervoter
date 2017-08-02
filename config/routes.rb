Rails.application.routes.draw do
  root to: "examples#index"
  get '/books/:id', to: "examples#index"

  namespace :api do
    namespace :v1 do
      resources :books do
        resources :matches
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :voicebunnies
    end
  end

end

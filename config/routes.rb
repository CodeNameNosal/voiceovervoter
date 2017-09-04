Rails.application.routes.draw do
  devise_for :users
  root to: "homes#index"

  resources :books
  resources :matched_voices, :only => [:edit, :update, :delete, :destroy]

  namespace :api do
    namespace :v1 do
      resources :voicebunnies, :only => [:create]
      resources :books do
        collection do
          get 'search'
        end
        resources :matched_voices
      end
    end
  end

end

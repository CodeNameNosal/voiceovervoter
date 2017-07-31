Rails.application.routes.draw do
 root to: "examples#index"

  namespace :api do
    namespace :v1 do
      resources :books
    end
  end
  
end

Rails.application.routes.draw do
  devise_for :users
  resources :posts, :path => 'articles'
  resources :projects
  resources :contacts, only: [:new, :create]
  get 'welcome/index'
  get 'welcome/about'
  root 'welcome#index'

  get '*path' => redirect('/')
end

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.2.5'

gem 'rails', '~> 5.1.4'
gem 'jquery-rails'
gem 'jquery-turbolinks', '~> 2.1'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'redcarpet', '~> 3.4'
gem 'pygments.rb', '~> 1.2', '>= 1.2.1'
gem 'friendly_id', '~> 5.2', '>= 5.2.3'
gem 'will_paginate', '~> 3.1', '>= 3.1.6'
gem 'mail_form', '~> 1.7'
gem 'devise', '~> 4.4'
gem 'bootstrap-sass', '~> 3.3', '>= 3.3.7'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

class WelcomeController < ApplicationController
  def index
    @posts = Post.all.limit(4).order("created_at DESC")
    @projects = Project.all.limit(4).order("created_at DESC")
  end

  def about
  end
end

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    user = User.find_by(email: params[:email])
  end

  def create
    user = User.find_by(email: params[:email])

    if user.nil?
      user = User.new(
        email: params[:email],
        stage_name: params[:stage_name],
      )
      user.save
    end

    session[:user_id] = user.id
    respond_to do |format|
      format.json { render json: { user: user }}
    end
  end
end

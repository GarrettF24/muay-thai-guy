class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  # POST/users

  def index
    @user = User.all

    render json: @user
  end

  def show
    set_user
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

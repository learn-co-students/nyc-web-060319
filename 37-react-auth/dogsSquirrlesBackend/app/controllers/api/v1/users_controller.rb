class Api::V1::UsersController < ApplicationController
skip_before_action :verify_authenticity_token
  def create
    user = User.create(user_params)
    token = JWT.encode({user_id: user.id}, "secret")
    render json: {token: token, user: user.username }
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end

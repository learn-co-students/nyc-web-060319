class Api::V1::AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def retrieve
  token = request.headers["Authorization"]
  user_id = JWT.decode(token, "secret")[0]["user_id"]
  user = User.find(user_id)
  render json: {user: user.username}
  end

  def destroy
  end
end

class SessionsController < ApplicationController 
    def new
        #render an actual form to log in 
    end
    def create
        #this will create my user's session
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to rappers_path
        else
            redirect_to login_path
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to login_path
    end
end
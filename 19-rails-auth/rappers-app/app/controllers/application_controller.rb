class ApplicationController < ActionController::Base
    #check if there is a user 
    def user 
        if session[:user_id] 
            User.find(session[:user_id])
        end
    end
    #validate that User 
    def logged_in?
        user 
    end
    #redirect if no user 
    def authorized?
        redirect_to login_path unless logged_in? 
    end
end

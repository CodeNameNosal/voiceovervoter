class ApplicationController < ActionController::Base
 # Prevent CSRF attacks by raising an exception.
 # For APIs, you may want to use :null_session instead.
 protect_from_forgery with: :exception

 before_action :configure_permitted_parameters, if: :devise_controller?




 # def this_is_a_test
 #   respond_to do |format|
 #      format.json{ render :json => @user.to_json }
 #   end
 # end




 protected

 def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
 end
end

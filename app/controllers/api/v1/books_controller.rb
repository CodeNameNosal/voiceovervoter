class Api::V1::BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if current_user
      render json: Book.where({ user_id: current_user.id }).order(updated_at: :desc)
    else
      render json: {error: true}
    end
  end

  def show
    book = Book.find(params[:id])
    render json: { book: book }
  end



  def destroy
    @book = Book.find(params[:id]).destroy
    redirect_to books_path
  end

end

class Api::V1::BooksController < ApplicationController
  def index
      render json: Book.where( user_id: current_user.id )
  end

  def show
    book = Book.find(params[:id])
    render json: { book: book }
  end
end

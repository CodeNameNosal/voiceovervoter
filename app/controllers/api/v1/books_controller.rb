class Api::V1::BooksController < ApplicationController
  def index
    if current_user
      render json: Book.where({ user_id: current_user.id })
    else
      render json: {error: true}
    end
  end

  def show
    book = Book.find(params[:id])
    render json: { book: book }
  end
end

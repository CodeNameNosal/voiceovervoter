class BooksController < ApplicationController
  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to root_path, notice: "Book has been added to your library."
    else
      render :new, alert: "There was a problem saving your new book."
    end
  end

  def edit
    @book = Book.find(params[:id])
    @original_title = @book.title
  end

  def update
    @book = Book.find(params[:id])
    @original_title = @book.title
    @book.update_attributes(book_params)
    if @book.save
      redirect_to root_path, notice: "Book has been updated successfully."
    else
      render action: 'edit', alert: "There was a problem editing your book."
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :user_id)
  end
end

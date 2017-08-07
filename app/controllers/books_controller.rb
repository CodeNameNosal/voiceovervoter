class BooksController < ApplicationController
  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    searched_title = @book.title
    if goodreadsSearch(@book.title)
      @book.cover = @cover
    end





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

  def show
  end

  def goodreadsSearch(searched_title)
    client = Goodreads::Client.new(:api_key => ENV['GOODREADS_KEY'], :api_secret => ENV['GOODREADS_SECRET'])
    search = client.search_books(searched_title)
    # binding.pry
    if search.total_results.to_i > 1
      possible_image = search.results.work.first.best_book.image_url
      @cover = search.results.work.first.best_book.image_url
      return @cover
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :user_id, :cover)
  end
end

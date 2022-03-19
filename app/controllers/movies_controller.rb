class MoviesController < ApplicationController
  def index
    # @list = List.find[params[:list_id]]
    @bookmark = Bookmark.new
    @movies = Movie.all.limit(10)

        if params[:query].present?
        @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%").limit(10)
          respond_to do |format|
            format.html
            format.text { render partial: 'movies/list', locals: { movies: @movies, bookmark: @bookmark }, formats: [:html] }
          end
        else
          @movies = Movie.all.limit(10)
        end
  end

  def show
  end
end

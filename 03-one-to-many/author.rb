require 'pry'
class Author
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    # @books_i_wrote = []
    @@all << self
  end

  def self.all
    @@all
  end

  def write_a_book(title, pages, genre)
    Book.new(title, pages, genre, self)
  end

  def my_books
    # list that contains all the books where I/me/"self" is the author
    Book.all.select do |book|
      book.author == self
    end

  end



end # end Author class



# binding.pry

require 'pry'
class Book
  attr_reader :title, :pages, :genre, :author

  @@all = []

  def initialize(title, pages, genre, author)
    @title = title
    @pages = pages
    @genre = genre
    @author = author
    @@all << self
  end

  def self.all
    @@all
  end

  def self.all_books_over_50
    # look at all of those books determine if they have MORE than 50 pages
    Book.all.select do |book|
      book.pages > 50
    end
    
  end

end #end Book class

book1 = Book.new()

book1.all_books_over_50
Book.all_books_over_50

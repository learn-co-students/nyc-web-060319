require "pry"

require_relative './author'
require_relative './book'


sunny = Author.new('Sun Tzu')

Book.new("the art of war", 100, "classic", sunny)



author_person = Author.new('R L Stine')
author_person2 = Author.new('Chett')
author_person3 = Author.new('swaglord')
author_person4 = Author.new('badform')


binding.pry

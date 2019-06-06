require 'pry'

class Squirrel
  attr_reader :name, :color

  @@all = []

  def initialize(name, color)
    @name = name
    @color = color
    @@all << self
  end


  def self.all
    @@all
  end

  def build_nest(tree, waterproof)
    Nest.new(self, tree, waterproof)
  end

end # end Squirell

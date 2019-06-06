require 'pry'


class Nest
  attr_reader :squirrel, :tree

  @@all = []

  def initialize(squirrel, tree, waterproof)
    @squirrel = squirrel
    @tree = tree
    @waterproof = waterproof
    @@all << self
  end

  def self.all
    @@all
  end

end # end Nest

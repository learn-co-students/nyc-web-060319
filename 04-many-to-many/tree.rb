require 'pry'

class Tree
  attr_reader :type
  attr_accessor :size

  @@all = []

  def initialize(type, size)
    @type = type
    @size = size
    @@all << self
  end

  def self.all
    @@all
  end

  def my_nests
    Nest.all.select do | nest |
      # checking which ones im the tree
      nest.tree == self
    end
  end

  # which squirrels are in this trees
  def my_squirrels
    #  which one knows about BOTH the trees and the nests?
    my_nests.map do |nest|
      nest.squirrel.name
    end
  end

  # How many nests do i have?

  def num_nests
    my_nests.length
  end

  # tree needs to grow
  def water
    @size += 1
  end

  # Water ALL the Trees
  def self.water
    @@all.each do |tree|
      tree.water
    end
  end



end # end Tree

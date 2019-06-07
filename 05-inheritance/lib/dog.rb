class Dog < Animal

  # attr_accessor :name, :age
  #
  # def initialize(name, age)
  #   @name = name
  #   @age = age
  # end

  extend Coffee::ClassMethods::SillyMethods
  extend Coffee
  include Coffee

  def emit_sound
    "Bark Ruff"
  end

end

class Animal

  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
    puts "I am an animal"
  end

  def emit_sound
     "Yeow"
  end

end

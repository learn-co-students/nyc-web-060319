class Bird < Animal

  attr_accessor :name, :age, :plumage

  include Coffee
  extend Coffee

  def initialize(name, age, plumage)
    super(name, age)
    @plumage = plumage
  end

  def emit_sound
    super
    puts "Squawk"
  end

end

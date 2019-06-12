class Tweet
  attr_accessor :message, :user_id
  attr_reader :id


  # @@all = []

  def self.all
    # @@all
    rows = DB[:conn].execute("SELECT * FROM tweets")

    # binding.pry
    # rn, this returns an array of hashes,
    # this should return an array of tweet instances
    rows
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    # @@all << self
  end

end

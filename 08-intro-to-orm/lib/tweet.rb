class Tweet < ActiveRecord::Base
  attr_accessor :message, :user_id
  attr_reader :id


  # @@all = []

  def self.all
    # @@all
    rows = DB[:conn].execute("SELECT * FROM tweets")

    # rn, this returns an array of hashes,
    # this should return an array of tweet instances
    rows.map do |row|
      # Tweet.new({'message' => row['message'], 'user_id' => row['user_id']})
      Tweet.new(row)
    end
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    # @@all << self
    # ADD this tweet instance to our databse
    sql = <<-sql
    INSERT INTO
    tweets
    (user_id, message)
    VALUES (?, ?)
    sql

    DB[:conn].execute(sql, @user_id, @message)
  end

end

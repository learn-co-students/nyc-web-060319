class Band
  attr_accessor :name, :genre

  @@all = []

  def initialize(name, genre)
    @name = name
    @genre = genre

    @@all << self
  end

  def self.all
    @@all
  end

  def concerts
    Concert.all.select do |concert|
      concert.band == self
    end
  end

  def venues
    self.concerts.map do |concert|
      concert.venue
    end
  end

  def uniq_venues
    venues.uniq
  end

  def add_concert(date, venue)
    Concert.new(date, self, venue)
  end

  # solutions to methods not covered in lecture
  def update_attendance(concert, number)
    if concert.band == self
      concert.attendance = number
    else
      puts 'not your concert'
    end
  end

  def total_attendance
    self.concerts.reduce(0) do |result, concert|
      result + concert.attendance
    end
  end

  def total_capacity
    self.venues.reduce(0) do |result, venue|
      result + venue.capacity
    end
  end

  def average_sale_rate
    (total_attendance.to_f / total_capacity.to_f) * 100
  end

  def find_concerts_at_venue(venue)
    self.concerts.select do |concert|
      concert.venue == venue
    end
  end

  def sell_out(venue)
    venue_concerts = find_concerts_at_venue(venue)

    venue_concerts.each do |concert|
      concert.attendance = venue.capacity
    end
  end
end

class Venue
  attr_reader :name, :location, :capacity

  @@all = []

  def initialize(name, location, capacity)
    @name = name
    @location = location
    @capacity = capacity

    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_location(location)
    all.select do |venue|
      venue.location == location
    end
  end

  def self.find_by_name(name)
    self.all.find do |venue|
      venue.name == name
    end
  end

  def concerts
    Concert.all.select do |concert|
      concert.venue == self
    end
  end

  def concert_dates
    concerts.map do |concert|
      concert.date
    end.uniq
  end

  def bands
    self.concerts.map do |concert|
      concert.band
    end.uniq
  end

  def attendances
    self.concerts.map do |concert|
      concert.attendance
    end
  end

  def total_attendance
    self.attendances.reduce(:+)
    # same as above
    # concerts.inject(0) do |result, concert|
    #   result + concert.attendance
    # end
  end

  def average_attendance
    self.total_attendance.to_f / concerts.length.to_f
  end
end

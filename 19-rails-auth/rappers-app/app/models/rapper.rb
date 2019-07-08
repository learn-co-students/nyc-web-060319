class Rapper < ApplicationRecord
    has_many :songs
    validates :name, presence: true
    validates :age, numericality: { only_integer: true }
    validate :validate_age

    def validate_age
        if self.age >= 40
            #add a message to the errors hash describing what's wrong 
            errors.add(:age, "Get a new Hobby")
        end
        
    end


end

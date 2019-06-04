require 'pry'

class BankAccount
  attr_accessor :amt
  attr_reader :owner, :type

  @@all = []

  def self.all_accounts
    @@all
  end

  def initialize(owner, amt=0, type)
    @owner = owner
    @amt = amt
    @type = type
    @@all << self
  end

  def deposit(deposit_amount)
    @amt += deposit_amount
  end

  def withdrawal(withdrawal_amount)
    if @amt < withdrawal_amount
      puts "ya broke"
    else
      @amt -= withdrawal_amount
    end
  end

end # end BankAccount class

swaggy = BankAccount.new('swaglord', 100, 'checking')
banksy = BankAccount.new('banksy',0, 'savings')
# swaggy.deposit
#
# banksy.deposit
binding.pry

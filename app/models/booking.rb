class Booking
  include ActiveModel::Model

  attr_accessor :first_name, :last_name, :email, :phone, :pickup_address, :destination, :date, :time, :people, :bags, :comment

  validates :first_name, :last_name, :email, :phone, :pickup_address, :destination, :date, :time, :people, :bags, presence: true
end

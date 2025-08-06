class AddPhoneToBookings < ActiveRecord::Migration[8.0]
  def change
    add_column :bookings, :phone, :integer
  end
end

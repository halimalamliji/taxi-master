class CreateBookings < ActiveRecord::Migration[8.0]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :pickup_address
      t.string :destination
      t.date :date
      t.time :time
      t.integer :people
      t.integer :bags
      t.string :comment

      t.timestamps
    end
  end
end

class BookingsController < ApplicationController
  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.valid?
      BookingMailer.with(booking: @booking).new_booking_email.deliver_now
      redirect_to new_booking_path, notice: "Votre réservation a bien été envoyée !"
    else
      render :new
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:first_name, :last_name, :email, :phone, :pickup_address, :destination, :date, :time, :people, :bags, :comment)
  end
end

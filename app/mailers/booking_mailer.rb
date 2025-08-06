class BookingMailer < ApplicationMailer
  def new_booking_email
    @booking = params[:booking]
    mail(
      to: "halima.lamliji@ymail.com",
      subject: "Nouvelle réservation de taxi"
    )
  end
end

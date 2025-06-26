function Confirmation({ bookingData }) {
  return (
    <section className="confirmation">
      <div className="confirmation-container">
        <div className="confirmation-box">
          <h2>Reservation Confirmed 🎉</h2>
          <p>Thank you for booking with Little Lemon.</p>
          <ul className="confirmation-details">
            <li><strong>Date:</strong> {bookingData.date}</li>
            <li><strong>Time:</strong> {bookingData.time}</li>
            <li><strong>Guests:</strong> {bookingData.guests}</li>
            <li><strong>Occasion:</strong> {bookingData.occasion}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Confirmation;

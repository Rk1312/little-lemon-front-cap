import { useState, useEffect } from "react";
import Confirmation from "./Confirmation";

function fetchAvailableTimes(date) {
  const times = {
    "2025-06-27": ["17:00", "18:00"],
    "2025-06-28": ["18:00", "19:00", "20:00"],
    "2025-06-29": ["19:00", "21:00", "22:00"],
  };

  return times[date] || ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
  });
  const [availableTimes, setAvailableTimes] = useState(fetchAvailableTimes(""));
  const [errors, setErrors] = useState({});
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }

    setErrors(newErrors);
    setIsSubmitEnabled(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "date") {
      setAvailableTimes(fetchAvailableTimes(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitEnabled) {
      setIsSubmitted(true);
    }
  };


  return (
    <section id="reservations" className="booking-section">
    {isSubmitted ? (
      <Confirmation bookingData={formData} />
    ) : (
      <>      
        <div className = "booking-form">
          <h2>Reserve a Table</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

            <label htmlFor="res-time">Time</label>
            <select
              id="res-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="10"
            />
            {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>

            <button type="submit" disabled={!isSubmitEnabled}>
              Make Reservation
            </button>
          </form>
        </div>
        <div className="booking-image">
          <img src="/images/booking.jpg" alt="Table reserved at restaurant" />
        </div>
      </>
    )}
    </section>
  );
}

export default BookingForm;

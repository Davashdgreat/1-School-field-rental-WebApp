import React, { useState } from 'react';
import { createBooking } from '../services/bookingService';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    fieldId: '',
    date: '',
    time: '',
  });
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [errorMessage, setErrorMessage] = useState('');  // Error state
  const [successMessage, setSuccessMessage] = useState('');  // Success state

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await createBooking(bookingData);  // API call to create booking
      setSuccessMessage('Booking created successfully!');
    } catch (error) {
      setErrorMessage('Failed to create booking.');
    } finally {
      setIsLoading(false);  // Stop loading
    }
  };

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Create a Booking</h2>
      <form onSubmit={handleBooking}>
        <label>
          Field ID:
          <input
            type="text"
            name="fieldId"
            value={bookingData.fieldId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={bookingData.time}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Booking...' : 'Create Booking'}
        </button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Booking;

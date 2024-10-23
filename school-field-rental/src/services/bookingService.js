import axios from 'axios';

const API_URL = 'https://example.com/api';

// Function to create a new booking
export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

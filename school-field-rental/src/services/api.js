import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // API URL

export const getFields = async () => {
  const response = await axios.get(`${API_URL}/fields`);
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${API_URL}/bookings`, bookingData);
  return response.data;
};

export const getPayments = async () => {
  const response = await axios.get(`${API_URL}/payments`);
  return response.data;
};
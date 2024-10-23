import axios from 'axios';

const API_URL = 'https://example.com/api';

// Function to get payments
export const getPayments = async () => {
  try {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

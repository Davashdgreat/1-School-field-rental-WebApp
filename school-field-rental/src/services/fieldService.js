import axios from 'axios';

const API_URL = 'https://example.com/api'; //API base URL

// Function to get fields
export const getFields = async () => {
  try {
    const response = await axios.get(`${API_URL}/fields`);
    return response.data;  // Return data to the calling component
  } catch (error) {
    throw error;  // Forward error to be handled by the component
  }
};

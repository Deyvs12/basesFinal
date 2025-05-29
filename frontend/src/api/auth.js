import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${baseURL}/auth/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

export const getAllGrupos = async () => {
  try {
    const response = await axios.get(`${baseURL}/grupos`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getGrupoById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/grupos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createGrupo = async (grupo) => {
  try {
    const response = await axios.post(`${baseURL}/grupos`, grupo);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateGrupo = async (id, grupo) => {
  try {
    const response = await axios.put(`${baseURL}/grupos/${id}`, grupo);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteGrupo = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/grupos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
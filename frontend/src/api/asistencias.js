import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

export const getAllAsistencias = async () => {
  try {
    const response = await axios.get(`${baseURL}/asistencias`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAsistenciaById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/asistencias/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createAsistencia = async (asistencia) => {
  try {
    const response = await axios.post(`${baseURL}/asistencias`, asistencia);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAsistencia = async (id, asistencia) => {
  try {
    const response = await axios.put(`${baseURL}/asistencias/${id}`, asistencia);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteAsistencia = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/asistencias/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
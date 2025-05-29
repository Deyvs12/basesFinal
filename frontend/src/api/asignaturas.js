import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

export const getAllAsignaturas = async () => {
  try {
    const response = await axios.get(`${baseURL}/asignaturas`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAsignaturaById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/asignaturas/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createAsignatura = async (asignatura) => {
  try {
    const response = await axios.post(`${baseURL}/asignaturas`, asignatura);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAsignatura = async (id, asignatura) => {
  try {
    const response = await axios.put(`${baseURL}/asignaturas/${id}`, asignatura);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteAsignatura = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/asignaturas/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
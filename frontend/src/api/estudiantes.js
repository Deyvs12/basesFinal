import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

export const getAllEstudiantes = async () => {
  try {
    const response = await axios.get(`${baseURL}/estudiantes`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getEstudianteById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/estudiantes/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createEstudiante = async (estudiante) => {
  try {
    const response = await axios.post(`${baseURL}/estudiantes`, estudiante);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateEstudiante = async (id, estudiante) => {
  try {
    const response = await axios.put(`${baseURL}/estudiantes/${id}`, estudiante);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteEstudiante = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/estudiantes/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
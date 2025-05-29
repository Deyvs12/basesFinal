import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

export const getAllDocentes = async () => {
  try {
    const response = await axios.get(`${baseURL}/docentes`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDocenteById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/docentes/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createDocente = async (docente) => {
  try {
    const response = await axios.post(`${baseURL}/docentes`, docente);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDocente = async (id, docente) => {
  try {
    const response = await axios.put(`${baseURL}/docentes/${id}`, docente);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDocente = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/docentes/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
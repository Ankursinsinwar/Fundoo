import axios from "axios";

const API_URL = "http://localhost:3001/notes";

export const getNotes = (userId) => {
  return axios.get(`${API_URL}?Userid=${userId}&archive=false&trash=false`);
};

export const getArchiveNotes = (userId) => {
  return axios.get(`${API_URL}?Userid=${userId}&archive=true&trash=false`);
};

export const getTrashNotes = (userId) => {
  return axios.get(`${API_URL}?Userid=${userId}&trash=true`);
};


export const addNote = (note) => {
  return axios.post(API_URL, note);
};

export const updateNote = (id, data) => {
  return axios.patch(`${API_URL}/${id}`, data);
};

export const deleteNote = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

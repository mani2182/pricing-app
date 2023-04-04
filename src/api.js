import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export async function uploadCsvFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data.records;
}

export async function searchRecords(searchTerm) {
  const response = await axios.get(`${API_BASE_URL}/search`, { params: { searchTerm } });
  return response.data.records;
}

export async function updateRecord(record) {
  const response = await axios.put(`${API_BASE_URL}/update`, record);
  return response.data.record;
}
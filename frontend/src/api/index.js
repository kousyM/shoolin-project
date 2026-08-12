import axios from 'axios';
import { getApiBaseUrl } from './config';

const api = axios.create({
  baseURL: `${getApiBaseUrl()}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 8000
});

export const checkBackendHealth = async () => {
  try {
    const response = await api.get('/status');
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.message || 'Unable to connect to Laravel Backend' 
    };
  }
};

export const getItems = async () => {
  try {
    const response = await api.get('/items');
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await api.post('/items', itemData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/items/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default api;

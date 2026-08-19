// Central API URL configuration for Local vs Live Hostinger Server

export const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    // Local development environment
    if (host === 'localhost' || host === '127.0.0.1') {
      return 'http://127.0.0.1:8001';
    }
    // Live Server Environment
    return window.location.origin + '/backend/public';
  }
  return 'http://127.0.0.1:8001';
};

export const API_BASE_URL = getApiBaseUrl();
export default getApiBaseUrl;

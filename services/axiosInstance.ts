// services/axiosInstance.ts
import axios from 'axios';
import environment from "@/environment/environment";


const axiosInstance = axios.create({
  baseURL: environment.BaseUrl,
  // baseURL : process.env.NEXT_PUBLIC_URL,
  // withCredentials: true,
    headers: {
    'Content-Type': 'application/json', 
  },
});

export const axiosInstances = axios.create({
  baseURL: "http://locallhost:3000",
    headers: {
    'Content-Type': 'application/json', 
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

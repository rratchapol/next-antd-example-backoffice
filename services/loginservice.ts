import environment from "@/environment/environment";

// services/loginService.ts
import axios from './axiosInstance';



export const loginservice = async (values: { username: string; password: string }) => {
  const response = await axios.post('/admin/login', { username: values.username, password: values.password });
  return response.data;
};
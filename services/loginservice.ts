
// services/loginService.ts
import axios from './axiosInstance';



export const loginservice = async (values: { email: string; password: string }) => {
  // const response = await axios.post('/auth/login', { email: values.email, password: values.password });
  // return response.data;

  try {
    // const res = await axios.post("/auth/login", { email: "test@example.com", password: "Password@123" });
    const res = await axios.post("/auth/login", values);
    return res.data; // { status: "success" } หรือ { status: "fail" }
  } catch (error) {
    // return object ที่ status ไม่ใช่ "success"
    return { status: "fail", message: "เข้าสู่ระบบล้มเหลว" };
  }
};
import environment from "@/environment/environment";

export default async function loginService({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const res = await fetch(`${environment.BaseUrl}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    return { success: true, ...data };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "เข้าสู่ระบบไม่สำเร็จ" };
  }
}


// services/loginService.ts
import axios from './axiosInstance';

export const loginservice = async (email: string, password: string) => {
  const response = await axios.post('/login', { email, password });
  return response.data;
};
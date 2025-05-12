"use client";

import LoginForm from "@/components/auth/LoginForm";
import login from "@/services/loginservice";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // ตรวจสอบว่าเป็น client-side ก่อนการใช้งาน localStorage
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async (values: { username: string; password: string }) => {
    const res = await login(values);

    if (res.success && res.token) {
      localStorage.setItem("token", res.token); // เก็บ JWT ไว้
      message.success("เข้าสู่ระบบสำเร็จ");
      router.push("/users");
    } else {
      message.error(res.message || "เข้าสู่ระบบล้มเหลว");
      console.error("Login error:", res.message);
    }
  };

  if (!isClient) {
    return null; // ถ้ายังไม่ใช่ client ให้ไม่ render อะไร
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">เข้าสู่ระบบเพื่อจัดการข้อมูล</p>
        </div>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}

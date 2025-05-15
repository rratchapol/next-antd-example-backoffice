"use client";

import login from "@/services/loginservice";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useEffect, useState } from "react";
import RegisterPage from "@/components/auth/RegisterForm";

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
  <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-green-300 py-16">
    {/* Back to Login Link */}
    <a
      href="/login"
      className="absolute top-4 left-4 text-sm text-white  hover:text-gray-700"
    >
      &#129120; Login page
    </a>

    {/* Register Page */}
    <RegisterPage />
  </div>
);
}

"use client";

import UserForm from "@/components/form/Userform";
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

  const handleSubmit = (data: any) => {
    console.log("ส่งข้อมูล: ", data);
  };

  const handleCancel = () => {
    console.log("ยกเลิกการกรอกข้อมูล");
    router.push("/users");
  };

  if (!isClient) {
    return null; // ถ้ายังไม่ใช่ client ให้ไม่ render อะไร
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-4">
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">ระบบบันทึกข้อมูลผู้ใช้</h1>
          <p className="text-gray-500 mt-1">กรอกข้อมูลด้านล่างให้ครบถ้วน</p>
        </div>
        <UserForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
}

"use client";

import UserForm from "@/components/form/user/Userform";
import { useRouter } from "next/navigation";
import { Button, message } from "antd"; 
import { useEffect, useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

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

  const onCancel = () => {
    console.log("ยกเลิกการกรอกข้อมูล");
    router.push("/users");
  };


  if (!isClient) {
    return null; 
  }

return (
  <>
  <h1 className="px-3 py-6 text-3xl font-extrabold text-gray-800">ระบบบันทึกข้อมูลร้านค้า</h1>
  <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 ">
    <div className="w-full p-10 bg-white rounded-xl shadow-xl">
      <div className="text-center mb-6">
      </div>
      <UserForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  </div>
  </>
);
}

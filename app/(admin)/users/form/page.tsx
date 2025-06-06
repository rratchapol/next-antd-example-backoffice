"use client";

import UserForm from "@/components/form/user/Userform";
import { useRouter } from "next/navigation";
import { Button, message } from "antd"; 
import { useEffect, useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { createUser } from "@/services/userservice";

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (data: any) => {
    console.log("ส่งข้อมูล: ---", data);
    sendDataToServer(data);
  };

  const sendDataToServer = async (data: any) => {
    try {
      const user = await createUser(data);
      console.log("บันทึกข้อมูลผู้ใช้สำเร็จ:", user);
    }
    catch (error) {
      console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูลผู้ใช้:", error);
      message.error("ไม่สามารถบันทึกข้อมูลผู้ใช้ได้");
    }
  };

  const handleCancel = () => {
    router.push("/users");
  };

  if (!isClient) {
    return null; 
  }

return (
  <>
  <h1 className="px-3 py-6 text-3xl font-extrabold text-gray-800">ระบบบันทึกข้อมูลผู้ใช้</h1>
  <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 ">
    <div className="w-full p-10 bg-white rounded-xl shadow-xl">
      <UserForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  </div>
  {/* <div className="flex justify-end mt-10">
      <Button onClick={onCancel} className="mr-2">
        กลับไป
      </Button>
      <Button type="primary" icon={<PlusOutlined />} htmlType="submit" className="!bg-green-500 !border-none">
        บันทึก
      </Button>
  </div> */}
  </>
);
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BrandForm from "@/components/form/brand/Brandform";

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
  <h1 className="px-3 py-6 text-3xl font-extrabold text-gray-800">ระบบบันทึกข้อมูลแบรนด์</h1>
  <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 ">
    <div className="w-full p-10 bg-white rounded-xl shadow-xl">
      <div className="text-center mb-6">
      </div>
      <BrandForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  </div>
  </>
);
}

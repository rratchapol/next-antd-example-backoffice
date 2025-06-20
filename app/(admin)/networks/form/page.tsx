"use client";

import NetworkForm from "@/components/form/network/Networkform";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NetworkformPage() {
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
    router.push("/networks");
  };


  if (!isClient) {
    return null; 
  }

return (
  <>
  <h1 className="px-3 py-6 text-3xl font-extrabold text-gray-800">ระบบบันทึกข้อมูลเครือข่าย</h1>
  <div className="flex justify-center items-center  w-full bg-gray-100 ">
    <div className="w-full p-10 bg-white rounded-xl shadow-xl">
      <div className="text-center mb-6">
      </div>
      <NetworkForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  </div>
  
  </>
);
}

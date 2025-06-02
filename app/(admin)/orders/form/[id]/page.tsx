// filepath: /users/form/[id]/page.tsx
"use client";
import OrderForm from "@/components/form/order/Orderform";
import { getUsersbyId, User } from "@/services/userservice";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function OrderFormPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    useId();
    
  }, []);

  const useId  = () => {
        async function fetchData() {
          const users = await getUsersbyId();
            console.log("users", users);
          setData(users);
        }
        fetchData();
      
  }
  const router = useRouter();
  const handleSubmit = (values: any) => {
    console.log("submit", values);
  };

    const onCancel = () => {
        router.push(`/users`)
        console.log("cancel");
    };
  return (
    <>
    <h1 className="px-3 py-6 text-3xl font-extrabold text-gray-800">รายละเอียดออเดอร์</h1>
    <div className="flex justify-center  w-full bg-gray-100 px-2">
      <div className="w-full p-10 bg-white rounded-xl shadow-xl">
        <div className="text-center mb-6">
        </div>
        <OrderForm userId={params.id} onSubmit={handleSubmit}></OrderForm>
      </div>

    </div>
    {/* <div className="flex justify-end mt-10">
        <Button onClick={onCancel} className="mr-2">
        กลับไป
        </Button>
        <Button type="primary" icon={<EditOutlined />} htmlType="submit" className="!bg-green-500 !border-none">
        แก้ไข
        </Button>
    </div> */}
    </>
);
}
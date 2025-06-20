// filepath: /users/form/[id]/page.tsx
"use client";
import OrderForm from "@/components/form/order/Orderform";
import { getUsersbyId, User } from "@/services/userservice";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function OrderFormPage({ params }: PageProps) {
  const [data, setData] = useState<User[]>([]);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    fetchParams();
  }, [params]);

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
        <OrderForm userId={id} onSubmit={handleSubmit}></OrderForm>
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
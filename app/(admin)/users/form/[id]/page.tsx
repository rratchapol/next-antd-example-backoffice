// filepath: /users/form/[id]/page.tsx
"use client";
import EditUserform from "@/components/form/EditUserform";
import UserForm from "@/components/form/Userform";
import { getUsersbyId, User } from "@/services/userservice";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function UserFormPage({ params }: { params: { id: string } }) {
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    async function fetchData() {
      const users = await getUsersbyId();
      const foundUser = users.find((u) => u.id === parseInt(params.id));
      setUserData(foundUser ?? null);
    }
    fetchData();
  }, [params.id]);

  const handleSubmit = (values: any) => {
    console.log("submit", values);
  };

  const onCancel = () => {
    router.push(`/users`);
  };

  const Submit = (value: any) => {
    console.log("submit  --:", value);
    
    
    // setIsEditing(false);
  };

  return (
    <>
      <h1 className="px-3 py-6 text-3xl font-extrabold text-gray-800">
        ระบบบันทึกข้อมูลผู้ใช้
      </h1>
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 px-2">
        <div className="w-full p-10 bg-white rounded-xl shadow-xl">
          {userData && (
            <EditUserform
              userId={params.id}
              onSubmit={handleSubmit}
              initialValues={userData}
              onCancel={onCancel}
              isEditing={isEditing}
            />
          )}
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <Button onClick={onCancel} className="mr-2">
          กลับไป
        </Button>
        {/* <Button type="primary" icon={<EditOutlined />} htmlType="submit" className="!bg-green-500 !border-none">
          บันทึก
        </Button> */}
        {!isEditing ? (
            <Button
              icon={<EditOutlined />}
              className="!bg-yellow-500 !border-none"
              onClick={() => setIsEditing(true)}
            >
              แก้ไข
            </Button>
          ) : (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              htmlType="submit"
              className="!bg-green-500 !border-none"
              onClick={() => Submit(handleSubmit)}
            >
              บันทึก
            </Button>
        )}
      </div>
    </>
  );
}

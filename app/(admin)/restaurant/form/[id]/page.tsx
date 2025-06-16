// filepath: /users/form/[id]/page.tsx
"use client";
import EditUserform from "@/components/form/user/EditUserform";
import UserForm from "@/components/form/user/Userform";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { getUsersbyId, updateUser, User } from "@/services/userservice";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function UserFormPage({ params }: { params: Promise<{ id: string }> }) {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = use(params);


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const user = await getUsersbyId(id);
       setUserData(user || null);
       setLoading(false);
       console.log("userData:", user);
    }
    fetchData();
  }, [id]);

  if (loading) {
  return <LoadingSpinner />;
}

  const handleSubmit = (values: User) => {
    console.log("submit", values);
    updateUserData(values);
  };

  const updateUserData = async (values: User) => {
    try {
      const updatedUser = await updateUser(id, values);
      console.log("บันทึกข้อมูลผู้ใช้สำเร็จ:", updatedUser);
      setUserData(updatedUser);
      setIsEditing(false); 
      router.push(`/users`);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูลผู้ใช้:", error);
    }
  }

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
              userId={id}
              onSubmit={handleSubmit}
              initialValues={userData}
              onCancel={onCancel}
              isEditing={isEditing}
            />
          )}
        </div>
      </div>

      
    </>
  );
}

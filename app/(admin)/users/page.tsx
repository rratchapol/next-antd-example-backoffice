"use client";

import UserTable  from "@/components/tables/UserTable";
import { useAuth } from "@/contexts/AuthContext";
import { message } from "antd";



export default function UserPage() {

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อมูลผู้ใช้</h1>
      <UserTable  />
    </div>
  );
}

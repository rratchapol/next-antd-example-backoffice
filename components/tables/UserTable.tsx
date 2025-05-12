// components/tables/DataTable.tsx

"use client";
import { useRouter } from "next/navigation";
import { Table, Button, Input, Space, Tag } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import  {getUser}  from "@/services/userservices";


interface UserType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const UserTable = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<UserType[]>([]);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/users/form");
  };

  useEffect(() => {
    async function fetchData() {
      const users = await getUser();
      setData(users);
    }
    fetchData();
  }, []);

  const columns: ColumnsType<UserType> = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "อายุ",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "ที่อยู่",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "สิทธิ์ผู้ใช้",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag === "admin" ? "volcano" : tag === "manager" ? "geekblue" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

return (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    {/* ส่วนค้นหาและปุ่ม เพิ่มข้อมูลใหม่ */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
      <Input
        placeholder="ค้นหา..."
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full sm:w-auto sm:max-w-sm"
      />
      <Button 
        type="primary" 
        icon={<PlusOutlined />}
        className="w-full sm:w-auto bg-green-600"
        onClick={handleButtonClick}
      >
        เพิ่มข้อมูลใหม่
      </Button>
    </div>

    {/* ตารางข้อมูล */}
    <div className="overflow-x-auto">
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="key"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
      />
    </div>
  </div>
);

};

export default UserTable;

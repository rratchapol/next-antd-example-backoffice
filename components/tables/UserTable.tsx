// components/tables/DataTable.tsx

"use client";
import { useRouter } from "next/navigation";
import { Table, Button, Input, Space, Tag } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { getUsers, User } from "@/services/userservice";




interface Props {
  users: User[];
}

const UserTable = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<User[]>([]);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/users/form");
  };

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      setData(users);
    }
    fetchData();
  }, []);

    const columns: ColumnsType<User> = [
    {
      title: "ลำดับ",
      // dataIndex: "index",
      key: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ตำแหน่ง",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "เขต",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "จังหวัด",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "จัดการ",
      dataIndex: "actions",
      key: "",
      render: (_text, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => router.push(`/users/form/${record.id}`)}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            danger
            onClick={() => {
              // Add your delete logic here
              // Example: handleDelete(record.id)
            }}
          />
        </Space>
      ),
    },
  ];


return (
  <div className="">
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

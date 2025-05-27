// components/tables/DataTable.tsx

"use client";
import { useRouter } from "next/navigation";
import { Table, Button, Input, Space, Tag, Select } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { Community, getCommunities } from "@/services/communityservice";




interface Props {
  community: Community[];
}

const CommunityTable = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<Community[]>([]);

  const router = useRouter();

  const { Option } = Select;

  const [status, setStatus] = useState<string>('ทั้งหมด');

  const handleChange = (value: string) => {
    console.log('เลือกสถานะ:', value);
    setStatus(value);
  };


  const handleButtonClick = () => {
    router.push("/users/form");
  };

  useEffect(() => {
    async function fetchData() {
      const users = await getCommunities();
      setData(users);
    }
    fetchData();
  }, []);

    const columns: ColumnsType<Community> = [
    {
      title: "ลำดับ",
      key: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "ชื่อ",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "จำนวนประชากร",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "เครือข่าย",
      dataIndex: "network",
      key: "network",
    },
    {
      title: "เขต",
      dataIndex: "district",
      key: "district",
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
              // code
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
      <div className="flex gap-3">
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          className="w-full sm:w-auto !bg-green-500 !border-none"
          onClick={handleButtonClick}
        >
          เพิ่มข้อมูลใหม่
        </Button>
            {/* ส่วนเลือกสถานะ */}
        <Select
          defaultValue="ทั้งหมด"
          style={{ width: 200 }}
          onChange={handleChange}
          value={status}
        >
          <Option value="สำเร็จ">สำเร็จ</Option>
          <Option value="กำลังดำเนินการ">กำลังดำเนินการ</Option>
          <Option value="เกิดข้อผิดพลาด">เกิดข้อผิดพลาด</Option>
          <Option value="ทั้งหมด">ทั้งหมด</Option>
        </Select>
      </div>

    </div>

    {/* ตารางข้อมูล */}
    <div className="overflow-x-auto">
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="key"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
        onRow={(record) => ({
          onClick: () => router.push(`/users/form/${record.id}`),
          // onClick: () => router.push(`/users/form`),
          style: { cursor: "pointer" }, 
        })}
      />
    </div>
  </div>
);

};

export default CommunityTable;

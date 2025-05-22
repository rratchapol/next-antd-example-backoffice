// components/tables/DataTable.tsx

"use client";
import { useRouter } from "next/navigation";
import { Table, Button, Input, Space, Tag, MenuProps, Select } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";

import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { getOrders, Order } from "@/services/orderservice";

import { Dropdown } from "antd";




interface Props {
  users: Order[];
}

const OrderTable = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<Order[]>([]);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/users/form");
  };

  useEffect(() => {
    async function fetchData() {
      const users = await getOrders();
      setData(users);
    }
    fetchData();
  }, []);

    const columns: ColumnsType<Order> = [
    {
      title: "ลำดับ",
      key: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "หมู่บ้าน",
      dataIndex: "village",
      key: "village",
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
      title: "วันที่เริ่ม",
      dataIndex: "startdate",
      key: "startdate",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "done" ? "green" : status === "in progress" ? "orange" : "red"}>
          {status}
        </Tag>
      ),
    },
    // {
    //   title: "Actions",
    //   key: "actions",
    //   render: (_text, record) => (
    //     <Space size="middle">
    //       <Button icon={<EditOutlined />} onClick={() => console.log("Edit", record)} />
    //       <Button icon={<DeleteOutlined />} onClick={() => console.log("Delete", record)} />
    //     </Space>
    //   ),
    // },

  ];

  
const { Option } = Select;

  const [status, setStatus] = useState<string>('ทั้งหมด');

  const handleChange = (value: string) => {
    console.log('เลือกสถานะ:', value);
    setStatus(value);
  };




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

    {/* ตารางข้อมูล */}
    <div className="overflow-x-auto">
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="key"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
        onRow={(record) => ({
          onClick: () => {
            router.push(`/orders/form/${record.id}`);
          },
        })}
      />
    </div>
  </div>
);

};

export default OrderTable;

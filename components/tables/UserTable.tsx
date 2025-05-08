"use client";

import { useState } from "react";
import { Table, Button, Input, Space, Tag } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  id: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    id: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["admin"],
  },
  {
    id: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["user"],
  },
  {
    id: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["user"],
  },
  {
    id: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
    tags: ["manager"],
  },
];

export default function DataTable() {
  const [searchText, setSearchText] = useState("");

  const columns: ColumnsType<DataType> = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          record.name.toString().toLowerCase().includes(value.toString().toLowerCase()) ||
          record.address.toString().toLowerCase().includes(value.toString().toLowerCase()) ||
          record.tags.toString().toLowerCase().includes(value.toString().toLowerCase())
        );
      },
    },
    {
      title: "อายุ",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "ที่อยู่",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "แท็ก",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag === 'admin' ? 'red' : tag === 'manager' ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "การจัดการ",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="primary" 
            size="small" 
            icon={<EditOutlined />}
            className="bg-blue-600"
          >
            แก้ไข
          </Button>
          <Button 
            danger 
            size="small" 
            icon={<DeleteOutlined />}
          >
            ลบ
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        <Input
          placeholder="ค้นหา..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: 300 }}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          className="bg-green-600"
        >
          เพิ่มข้อมูลใหม่
        </Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="key"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
      />
    </div>
  );
}
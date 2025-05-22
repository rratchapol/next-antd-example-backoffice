// UserForm.tsx
"use client";

import { Form, Input, Button, Row, Col, Divider, Select, DatePicker, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { EnvironmentOutlined } from "@ant-design/icons";
import VolunteerForm from "./user/VolunteerForm";
import UsersForm from "./user/๊UserForm";
import RestaurantForm from "./user/RestaurantForm";
import VillageForm from "./user/VillageForm";

const { Title } = Typography;

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
};

export default function UserForm({ onSubmit, onCancel, userId }: UserFormProps) {
  const [form] = useForm();

  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="w-full mt-2 bg-white p-4 "
    >
       {/* ฟอร์มข้อมูลผู้ใช้ */}
      <UsersForm />

      {/* ฟอร์มข้อมูลอาสา */}
      <VolunteerForm />

      {/* ฟอร์มข้อมูลร้านค้า */}
      <RestaurantForm />

      {/* ฟอร์มข้อมูลหมู่บ้าน */}
      <VillageForm />

      <div className="pt-10"></div>
      {/* <Form.Item className="text-right pt-4">
        <Button onClick={onCancel} className="mr-2 ">
          กลับไป
        </Button>
        <Button type="primary" htmlType="submit" className="!bg-green-500 !border-none">
          บันทึก
        </Button>
      </Form.Item> */}
    </Form>
  );
}

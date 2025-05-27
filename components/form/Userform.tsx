// UserForm.tsx
"use client";

import { Form, Input, Button, Row, Col, Divider, Select, DatePicker, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { EnvironmentOutlined } from "@ant-design/icons";
import VolunteerForm from "./user/VolunteerForm";
import UsersForm from "./user/๊UserForm";
import RestaurantForm from "./user/RestaurantForm";
import VillageForm from "./user/VillageForm";
import PopUp from "../popup/PopUp";
import { useState } from "react";

const { Title } = Typography;

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
};

export default function UserForm({ onSubmit }: UserFormProps) {
  const [form] = useForm();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleOk = () => {
    setShowConfirm(false);
    onSubmit(form.getFieldsValue());
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };


  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  const onCancel = () => {
    console.log("Cancelled");
  };

  return (
    <>
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="w-full mt-2 bg-white p-4 "
    >
       {/* ฟอร์มข้อมูลผู้ใช้ */}
      <UsersForm />



      <div className="pt-10"></div>
      <Form.Item className="text-right pt-4">
        <Button onClick={onCancel} className="mr-2 ">
          กลับไป
        </Button>
        <Button type="primary" htmlType="submit" className="!bg-green-500 !border-none">
          บันทึก
        </Button>
      </Form.Item>
    </Form>
    <PopUp
        open={showConfirm}
        onOk={handleOk}
        onCancel={handleCancel}
      />
       </>
  );
}

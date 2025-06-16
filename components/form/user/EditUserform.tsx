// components/form/EditUserForm.tsx
"use client";

import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import VolunteerForm from "./VolunteerForm";
import RestaurantForm from "./RestaurantForm";
import VillageForm from "./VillageForm";
import PopUpUpdate from "@/components/popup/PopUp";

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
  initialValues?: any; 
    isEditing?: boolean;
  
};

export default function UserForm({ onSubmit, onCancel, userId, initialValues }: UserFormProps) {
  const [form] = useForm();

    const [status, setStatus] = useState<string>(initialValues?.role || 'อาสา');
    const [isEditing, setIsEditing] = useState(false);
    const [statusisactive, setStatusisactive] = useState<string>('active');
    const [showConfirm, setShowConfirm] = useState(false);

  const handleOk = () => {
    setShowConfirm(false);
    onSubmit(form.getFieldsValue());
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };
    
      const handleChange = (value: string) => {
      console.log('เลือกสถานะ:', value);
      setStatus(value);
      setIsEditing(true); // เปิดโหมดแก้ไขหลังจากเลือกสถานะ
    };

  const submit = (values: any) => {
    console.log("submit --:", values);
    onSubmit(values);
    setIsEditing(false); // ปิดโหมดแก้ไขหลังจากบันทึก

  };
  const handleFinish = (values: any) => {
    onSubmit(values);
  };

    useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
    }, [initialValues, form]);


  return (
    <>
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="w-full mt-2 bg-white p-4 "
      // disabled={!isEditing}
    >
      <Title level={4}>ข้อมูลผู้ใช้งานทั่วไป</Title>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} >
          <Form.Item label="Username" name="username">
            <Input disabled={!isEditing} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="อีเมล" name="email">
            <Input disabled={!isEditing} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item label="เบอร์โทร" name="phone">
            <Input disabled={!isEditing} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item label="สถานะ" name="status">
            <Select
              placeholder="เลือกสถานะ"
              onChange={handleChange}
              value={statusisactive}
              disabled={!isEditing}
            >
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item label="บทบาท" name="role">
            <Select
              placeholder="เลือกบทบาท"
              onChange={handleChange}
              value={status}
              disabled={!isEditing}
            >
              <Select.Option value="อาสา">อาสา</Select.Option>
              <Select.Option value="ร้านค้า">ร้านค้า</Select.Option>
              <Select.Option value="ชุมชน">ชุมชน</Select.Option>
              <Select.Option value="อาสาและชุมชน">อาสาและชุมชน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="ชื่อ" name="firstname">
            <Input disabled={!isEditing} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="นามสกุล" name="lastname">
            <Input disabled={!isEditing} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Form.Item label="ที่อยู่" name="address">
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} disabled={!isEditing} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form.Item label="จังหวัด" name="province">
            <Select placeholder="เลือกจังหวัด" disabled={!isEditing} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form.Item label="เขต/อำเภอ" name="district">
            <Select placeholder="เลือกเขต/อำเภอ" disabled={!isEditing} />
          </Form.Item>
        </Col>
      </Row>

      {/* แสดงฟอร์มตามบทบาทที่เลือก */}
      {status === "อาสา" && <VolunteerForm form={form} />}
      {status === "ร้านค้า" && <RestaurantForm />}
      {status === "ชุมชน" && <VillageForm />}
      {status === "อาสาและชุมชน" && (
        <>
          <VolunteerForm form={form} />
          <VillageForm />
        </>
      )}


      <div className="pt-10"></div>
      <div className="flex justify-end mt-10">
        <Button onClick={onCancel} className="mr-2">
          กลับไป
        </Button>
        {!isEditing ? (
          <Button
            icon={<EditOutlined />}
            className="!bg-yellow-500 !border-none"
            onClick={() => setIsEditing(true)}
            // ไม่มี disabled ที่นี่
          >
            แก้ไข
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="!bg-green-500 !border-none"
            onClick={() => setShowConfirm(true)}
          >
            บันทึก
          </Button>
        )}
      </div>
    </Form>
    <PopUpUpdate
      open={showConfirm}
      onOk={handleOk}
      onCancel={handleCancel}
    />
    </>
  );
}

// components/form/EditUserForm.tsx
"use client";

import { Col, Form, Input, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import UsersForm from "./user/๊UserForm";
import Title from "antd/es/typography/Title";
import VolunteerForm from "./user/VolunteerForm";
import RestaurantForm from "./user/RestaurantForm";
import VillageForm from "./user/VillageForm";
import { useEffect, useState } from "react";

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
  initialValues?: any; 
    isEditing?: boolean;
  
};

export default function UserForm({ onSubmit, onCancel, userId, initialValues, isEditing }: UserFormProps) {
  const [form] = useForm();

    const [status, setStatus] = useState<string>(initialValues?.role || 'อาสา');
    
      const handleChange = (value: string) => {
      console.log('เลือกสถานะ:', value);
      setStatus(value);
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
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="w-full mt-2 bg-white p-4 "
      disabled={!isEditing}
    >
       {/* ฟอร์มข้อมูลผู้ใช้ */}
      {/* <UsersForm /> */}

           {/* หัวข้อ */}
      <Title level={4}>ข้อมูลผู้ใช้งานทั่วไป</Title>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} >
          <Form.Item label="Username" name="username">
            <Input  />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="อีเมล" name="email">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item label="เบอร์โทร" name="phone">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item label="สถานะ" name="status">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item label="บทบาท" name="role">
            <Select placeholder="เลือกบทบาท"  onChange={handleChange} value={status} >
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
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="นามสกุล" name="lastname">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Form.Item label="ที่อยู่" name="address">
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form.Item label="จังหวัด" name="province">
            <Select placeholder="เลือกจังหวัด" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form.Item label="เขต/อำเภอ" name="district">
            <Select placeholder="เลือกเขต/อำเภอ" />
          </Form.Item>
        </Col>
      </Row>

      {/* แสดงฟอร์มตามบทบาทที่เลือก */}
      {status === "อาสา" && <VolunteerForm />}
      {status === "ร้านค้า" && <RestaurantForm />}
      {status === "ชุมชน" && <VillageForm />}
      {status === "อาสาและชุมชน" && (
        <>
          <VolunteerForm />
          <VillageForm />
        </>
      )}


      <div className="pt-10"></div>
    </Form>
  );
}

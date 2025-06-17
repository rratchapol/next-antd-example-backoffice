// UserForm.tsx
"use client";

import { Form, Button, Typography, Row, Col, Select, Input, Divider } from "antd";
import { useForm } from "antd/es/form/Form";
import PopUp from "../../popup/PopUp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import VolunteerForm from "./VolunteerForm";
import RestaurantForm from "./RestaurantForm";
import VillageForm from "./VillageForm";

const { Title } = Typography;

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
};

export default function UserForm({ onSubmit }: UserFormProps) {
  const [form] = useForm();
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState<string>("อาสา");
  const [statusisactive, setStatusisactive] = useState<string>("active");
  const router = useRouter();

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
    router.push(`/users`);
  };

  const handleChange = (value: string) => {
    setStatus(value);
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
        <div className="w-full">
          <Title level={4}>ข้อมูลผู้ใช้งานทั่วไป</Title>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="อีเมล" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="Password" name="password">
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
                <Select placeholder="เลือกสถานะ" value={statusisactive}>
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="inactive">Inactive</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={5}>
              <Form.Item label="บทบาท" name="role">
                <Select placeholder="เลือกบทบาท" onChange={handleChange} value={status}>
                  <Select.Option value="delivery">อาสา</Select.Option>
                  <Select.Option value="restaurant">ร้านค้า</Select.Option>
                  <Select.Option value="community">ชุมชน</Select.Option>
                  <Select.Option value="delivery-community">อาสาและชุมชน</Select.Option>
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
          {/* <Row gutter={16}>
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
          </Row> */}
          {/* แสดงฟอร์มตามบทบาทที่เลือก */}
          {status === "delivery" && <VolunteerForm form={form} />}
          {status === "restaurant" && <RestaurantForm />}
          {status === "community" && <VillageForm  />}
          {status === "delivery-community" && (
            <>
              <VolunteerForm form={form} />
              <VillageForm  />
            </>
          )}
        </div>
        <div className="pt-10"></div>
        <Form.Item className="text-right pt-4">
          <Button onClick={onCancel} className="mr-2 ">
            กลับไป
          </Button>
          <Button type="primary" onClick={() => setShowConfirm(true)} className="!bg-green-500 !border-none">
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

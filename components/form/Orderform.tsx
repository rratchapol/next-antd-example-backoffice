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

export default function OrderForm({ onSubmit, onCancel, userId }: UserFormProps) {
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
            {/* หัวข้อ */}
      <Title level={4}>ข้อมูลออเดอร์</Title>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="ชื่อร้านค้า" name="username">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="ที่อยู่" name="address">
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="ชื่อผู้ติดต่อ" name="name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="เบอร์โทร" name="phone">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="จำนวนตะกร้า" name="firstName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="น้ำหนัก" name="lastName">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      
    </Form>
  );
}

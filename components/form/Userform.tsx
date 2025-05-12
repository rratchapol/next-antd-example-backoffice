"use client";

import { Form, Input, Button, Row, Col } from "antd";
import { useForm } from "antd/es/form/Form";

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
};

export default function UserForm({ onSubmit, onCancel }: UserFormProps) {
  const [form] = useForm();

  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="ชื่อ"
            name="firstName"
            rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
          >
            <Input placeholder="ชื่อ" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="นามสกุล"
            name="lastName"
            rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="เบอร์โทร"
        name="phone"
        rules={[{ required: true, message: "กรุณากรอกเบอร์โทร" }]}
      >
        <Input placeholder="เบอร์โทร" />
      </Form.Item>

      <Form.Item
        label="ที่อยู่"
        name="address"
        rules={[{ required: true, message: "กรุณากรอกที่อยู่" }]}
      >
        <Input.TextArea rows={2} placeholder="ที่อยู่" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="จังหวัด"
            name="province"
            rules={[{ required: true, message: "กรุณากรอกจังหวัด" }]}
          >
            <Input placeholder="จังหวัด" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="เขต/อำเภอ"
            name="district"
            rules={[{ required: true, message: "กรุณากรอกเขต/อำเภอ" }]}
          >
            <Input placeholder="เขต/อำเภอ" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="ละติจูด (Latitude)"
            name="latitude"
            rules={[{ required: true, message: "กรุณากรอกละติจูด" }]}
          >
            <Input placeholder="ละติจูด" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="ลองจิจูด (Longitude)"
            name="longitude"
            rules={[{ required: true, message: "กรุณากรอกลองจิจูด" }]}
          >
            <Input placeholder="ลองจิจูด" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item className="text-right">
        <Button onClick={onCancel} className="mr-2">
          ยกเลิก
        </Button>
        <Button type="primary" htmlType="submit">
          ตกลง
        </Button>
      </Form.Item>
    </Form>
  );
}

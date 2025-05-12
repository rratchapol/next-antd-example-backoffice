"use client";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";

type LoginFormProps = {
  onLogin: (values: { username: string; password: string }) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [form] = useForm();

  const handleFinish = (values: any) => {
    onLogin(values); // ส่งข้อมูลไปให้ page
  };

  return (
    <Form
      form={form}
      name="login"
      initialValues={{ remember: true }}
      layout="vertical"
      className="mt-8"
      onFinish={handleFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="ชื่อผู้ใช้"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="รหัสผ่าน"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>จดจำฉัน</Checkbox>
        </Form.Item>
        <a className="float-right text-blue-600" href="#">
          ลืมรหัสผ่าน?
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-blue-600"
          size="large"
        >
          เข้าสู่ระบบ
        </Button>
      </Form.Item>
    </Form>
  );
}

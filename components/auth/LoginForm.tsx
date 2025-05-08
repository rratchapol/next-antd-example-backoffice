"use client";

import { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      // TODO: เพิ่มการเรียก API authentication ที่นี่
      console.log("Login values:", values);
      
      // Mock successful login
      setTimeout(() => {
        message.success("เข้าสู่ระบบสำเร็จ");
        router.push("/users");
        setLoading(false);
      }, 1000);
    } catch (error) {
      message.error("เข้าสู่ระบบไม่สำเร็จ");
      setLoading(false);
    }
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
      className="mt-8"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
      >
        <Input 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="ชื่อผู้ใช้" 
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
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
          loading={loading}
          className="w-full bg-blue-600"
          size="large"
        >
          เข้าสู่ระบบ
        </Button>
      </Form.Item>
    </Form>
  );
}
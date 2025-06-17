"use client";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import Image from "next/image";


type LoginFormProps = {
  onLogin: (values: { email: string; password: string }) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [form] = useForm();

  const handleFinish = (values: any) => {
    onLogin(values); // ส่งข้อมูลไปให้ page
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Side - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-b from-blue-700 to-green-300 items-center justify-center">
        <Image
          src="/assets/bat.png" // path ไปยังไฟล์ของคุณใน public folder
          alt="Login Illustration"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Right Side - Full width on mobile, 2/5 on large screens */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 bg-white py-8 lg:py-0">
        {/* <Image
          src="/assets/sos_logo.png" // โลโก้ขององค์กรคุณ
          alt="SOS Logo"
          width={400}
          height={200}
          className="mb-4"
        /> */}

        <h1 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-center">เข้าสู่ระบบ</h1>
        {/* <p className="text-gray-500 text-center mb-8">
          Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p> */}

        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={handleFinish}
          className="w-full max-w-sm"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="ชื่อผู้ใช้"
              size="large"
              className="text-sm sm:text-base"
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
              className="text-sm sm:text-base"
            />
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>จดจำฉัน</Checkbox>
            </Form.Item> */}
            <a></a>
            {/* <a className="text-sm !text-gray-900" href="#">
              ลืมรหัสผ่าน?
            </a> */}
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full !bg-green-500 hover:!bg-green-600 !border-none text-sm sm:text-base"
            >
              เข้าสู่ระบบ
            </Button>
          </Form.Item>

          <p className="text-center text-sm sm:text-base">
            ยังไม่มีบัญชี?{" "}
            <a href="/register" className="!text-green-500">
              สมัครสมาชิก
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
}

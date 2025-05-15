'use client';

import React from 'react';
import { Form, Input, Checkbox, Button, message, Typography } from 'antd';

const { Title, Text } = Typography;

export default function RegisterForm() {
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    if (!values.agree) {
      message.error('กรุณายอมรับเงื่อนไขการใช้งานก่อน');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        message.success('สมัครสมาชิกสำเร็จ!');
        form.resetFields();
      } else {
        message.error('ไม่สามารถสมัครสมาชิกได้');
      }
    } catch (err) {
      console.error(err);
      message.error('เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <Title level={2} className="text-center mb-0">Registration</Title>
        <Text type="secondary" className="text-center block mb-6">We missed you! Please enter your details</Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="First name" name="firstName" rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]}>
              <Input placeholder="example" />
            </Form.Item>
            <Form.Item label="Last name" name="lastName" rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}>
              <Input />
            </Form.Item>
          </div>

          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Email Address" name="email" rules={[{ type: 'email', required: true, message: 'กรุณากรอกอีเมลที่ถูกต้อง' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}>
            <Input.Password placeholder="input password" />
          </Form.Item>

          <Form.Item name="agree" valuePropName="checked" className="mb-2">
            <Checkbox>
              By registering, you agree to the Terms of Service: You must use this website legally, respect others, and understand that your data may be stored.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="!bg-green-600 !hover:bg-green-600 !rounded-full !border-none !py-5 ">
              Create account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

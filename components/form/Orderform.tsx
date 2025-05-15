'use client';

import React from 'react';
import { Form, Input, Checkbox, Button, message } from 'antd';

export default function RegisterPage() {
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    if (!values.agree) {
      message.error("กรุณายอมรับเงื่อนไขการใช้งานก่อน");
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
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="max-w-lg mx-auto space-y-4"
    >
      <Form.Item label="First name" name="firstName" rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]}>
        <Input placeholder="example" />
      </Form.Item>

      <Form.Item label="Last name" name="lastName" rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}>
        <Input />
      </Form.Item>

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
        <Input.Password />
      </Form.Item>

      <Form.Item name="agree" valuePropName="checked">
        <Checkbox>
          By registering, you agree to the Terms of Service...
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create account
        </Button>
      </Form.Item>
    </Form>
  );
}

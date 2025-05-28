"use client";

import { Form, Button, Row, Col, Input, Typography, Select, Upload, Divider } from "antd";
import { useForm } from "antd/es/form/Form";
import PopUp from "../../popup/PopUp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UserTable from "@/components/tables/UserTable";

const { Title } = Typography;

type NetworkFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
};

export default function NetworkForm({ onSubmit }: NetworkFormProps) {
  const router = useRouter();
    
  const [form] = useForm();
  const [showConfirm, setShowConfirm] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
    router.push("/community");
    console.log("Cancelled");
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="w-full mt-2 bg-white p-4"
      >
        <Title level={4}>ข้อมูลเครือข่าย</Title>


            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={20}>
                <Form.Item label="ชื่อเครือข่าย" name="network" rules={[{ required: true, message: "กรุณากรอกชื่อร้านค้า" }]}>
                  <Input placeholder="กรอกชื่อเครือข่าย"/>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={20}>
                <Form.Item label="ที่อยู่" name="address">
                  <Input.TextArea
                    autoSize={{ minRows: 2, maxRows: 3 }}
                    placeholder="กรอกที่อยู่ร้านค้า"
                  />
                </Form.Item>
              </Col>
            </Row>


        <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={5}>
                <Form.Item label="จังหวัด" name="province">
                <Select placeholder="เลือกจังหวัด" />
                </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={5}>
                <Form.Item label="เขต/อำเภอ" name="district">
                <Select placeholder="เลือกเขต/อำเภอ" />
                </Form.Item>
            </Col>
            <Col xs={24} md={5}>
                <Form.Item label="ละติจูด" name="location_lat">
                  <Input placeholder="กรอกละติจูด"/>
                </Form.Item>
            </Col>
            <Col xs={24} md={5}>
                <Form.Item label="ลองจิจูด" name="location_lng">
                  <Input placeholder="กรอกลองจิจูด"/>
                </Form.Item>
            </Col>
        </Row>

        <div className="pt-10" />
        <Divider />
        <Title level={5} className="text-center pb-10">สมาชิกอาสาในเครือข่าย</Title>
        <div className="px-15"><UserTable /></div>

        <Divider />
        <Title level={5} className="text-center pb-10">สมาชิกชุมชนในเครือข่าย</Title>
        <div className="px-15"><UserTable /></div>
        
        
        <div className="pt-10" />
        <Form.Item className="text-right pt-4">
          <Button onClick={onCancel} className="mr-2">
            กลับไป
          </Button>
          <Button
            type="primary"
            onClick={() => setShowConfirm(true)}
            className="!bg-green-500 !border-none"
          >
            บันทึก
          </Button>
        </Form.Item>
      </Form>

      

      <PopUp open={showConfirm} onOk={handleOk} onCancel={handleCancel} />
    </>
  );
}

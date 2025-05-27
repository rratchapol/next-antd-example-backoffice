"use client";

import { Form, Button, Row, Col, Input, Typography, Select, Upload, Divider } from "antd";
import { useForm } from "antd/es/form/Form";
import PopUp from "../../popup/PopUp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UserTable from "@/components/tables/UserTable";

const { Title } = Typography;

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
};

export default function RestaurantForm({ onSubmit }: UserFormProps) {
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
    router.push("/restaurant");
    console.log("Cancelled");
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // เมื่อเลือกรูปภาพ ให้ preview ทันที
  const handleImageChange = ({ fileList }: any) => {
    const file = fileList[0]?.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="w-full mt-2 bg-white p-4"
      >
        <Title level={4}>ข้อมูลร้านค้า</Title>

        <Row gutter={32} align="top">
          {/* รูปภาพ */}
          <Col xs={24} sm={24} md={24} lg={6}>
            <Form.Item
              name="logo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                name="logo"
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
                showUploadList={false}
                onChange={handleImageChange}
                onPreview={() => imagePreview && window.open(imagePreview, "_blank")}
                style={{ width: 170, height: 170} }
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#aaa", textAlign: "center" }}>
                      เพิ่มรูปภาพร้านค้า
                    </div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Col>

          {/* ฟอร์มข้อมูล */}
          <Col xs={24} md={18}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={14}>
                <Form.Item label="ชื่อร้านค้า" name="restaurantName" rules={[{ required: true, message: "กรุณากรอกชื่อร้านค้า" }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6}>
                <Form.Item label="ชื่อร้านค้า" name="restaurantName" rules={[{ required: true, message: "กรุณากรอกชื่อร้านค้า" }]}>
                  <Select placeholder="เลือกชื่อร้านค้า">
                    <Select.Option value="ร้านอาหาร A">แบรนด์ A</Select.Option>
                    <Select.Option value="ร้านอาหาร B">แบรนด์ B</Select.Option>
                    <Select.Option value="ร้านอาหาร C">แบรนด์ C</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={20}>
                <Form.Item label="ที่อยู่" name="address">
                  <Input.TextArea
                    autoSize={{ minRows: 2, maxRows: 3 }}
                    placeholder="กรอกรอกที่อยู่ร้านค้า"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={6}>
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
                  <Input />
                </Form.Item>
            </Col>
            <Col xs={24} md={5}>
                <Form.Item label="ลองจิจูด" name="location_lng">
                  <Input />
                </Form.Item>
            </Col>
        </Row>

        <div className="pt-10" />
        <Divider />
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

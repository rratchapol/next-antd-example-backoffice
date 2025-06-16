// component/Form/VolunteerFormSection.tsx
import { Row, Col, Form, Select, Input, Typography, Divider, Button, message } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;
type VolunteerFormProps = {
  form: any;
};
// รับ form เป็น prop จาก parent
export default function VolunteerForm({ form }: VolunteerFormProps) {
  const [carType, setCarType] = useState<string>('รถเก๋ง');


  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      message.error("เบราว์เซอร์ของคุณไม่รองรับการระบุตำแหน่ง");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        form.setFieldsValue({
          location_lat: position.coords.latitude,
          location_long: position.coords.longitude,
        });
        message.success("ดึงพิกัดสำเร็จ");
      },
      () => {
        message.error("ไม่สามารถดึงพิกัดได้");
      }
    );
  };

  return (
    <>
      <Divider />
      <Title level={4}>ข้อมูลเกี่ยวกับอาสา</Title>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="ประเภทรถยนต์" name="vehicle_type">
            <Select placeholder="เลือกประเภทรถยนต์" value={carType} >
              <Select.Option value="car">รถเก๋ง</Select.Option>
              <Select.Option value="motorcycle">รถจักรยานยนต์</Select.Option>
              <Select.Option value="bicycle">จักรยาน</Select.Option>
              <Select.Option value="other">รถกระบะ</Select.Option>
              <Select.Option value="truck">รถบรรทุก</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="ทะเบียนรถยนต์" name="vehicle_plate_no">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="น้ำหนักรวมสูงสุด (kg)" name="max_capacity_kg">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="เครือข่าย" name="community_name">
            <Select placeholder="เลือกเครือข่าย" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="ละติจูด" name="location_lat">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="ลองจิจูด" name="location_long">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="โลเคชั่น" >
            <Button
              icon={<EnvironmentOutlined />}
              type="primary"
              className="!bg-green-500 !border-none"
              onClick={handleGetLocation}
            >
              choose your map
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

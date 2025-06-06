// component/form/user/UserForm.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button } from "antd";
import { useState } from "react";
import VolunteerForm from "./VolunteerForm";
import RestaurantForm from "./RestaurantForm";
import VillageForm from "./VillageForm";

const { Title } = Typography;

export default function UsersForm() {

  const [status, setStatus] = useState<string>('อาสา');
  const [statusisactive, setStatusisactive] = useState<string>('active');
  
    const handleChange = (value: string) => {
    console.log('เลือกสถานะ:', value);
    setStatus(value);
  };

  return (
    <div className="w-full">
      {/* หัวข้อ */}
      <Title level={4}>ข้อมูลผู้ใช้งานทั่วไป</Title>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={5} >
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={5} >
          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Form.Item label="อีเมล" name="email">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item label="เบอร์โทร" name="phone">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item label="สถานะ" name="status">
            {/* <Input /> */}
            <Select placeholder="เลือกสถานะ"  value={statusisactive} >
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={5}>
          <Form.Item label="บทบาท" name="role">
            <Select placeholder="เลือกบทบาท" onChange={handleChange} value={status} >
              <Select.Option value="delivery">อาสา</Select.Option>
              <Select.Option value="restaurant">ร้านค้า</Select.Option>
              <Select.Option value="community">ชุมชน</Select.Option>
              <Select.Option value="delivery-community">อาสาและชุมชน</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="ชื่อ" name="firstname">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item label="นามสกุล" name="lastname">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Form.Item label="ที่อยู่" name="address">
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form.Item label="จังหวัด" name="province">
            <Select placeholder="เลือกจังหวัด" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form.Item label="เขต/อำเภอ" name="district">
            <Select placeholder="เลือกเขต/อำเภอ" />
          </Form.Item>
        </Col>
      </Row>

      {/* แสดงฟอร์มตามบทบาทที่เลือก */}
      {status === "delivery" && <VolunteerForm />}
      {status === "restaurant" && <RestaurantForm />}
      {status === "community" && <VillageForm />}
      {status === "delivery-community" && (
        <>
          <VolunteerForm />
          <VillageForm />
        </>
      )}

    </div>
  );
}

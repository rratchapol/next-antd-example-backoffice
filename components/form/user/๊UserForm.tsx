// component/Form/VolunteerFormSection.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button } from "antd";

const { Title } = Typography;

export default function UsersForm() {
  return (
    <>
      {/* หัวข้อ */}
      <Title level={4}>ข้อมูลผู้ใช้งานทั่วไป</Title>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="อีเมล" name="email">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={5}>
          <Form.Item label="เบอร์โทร" name="phone">
            <Input />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="สถานะ" name="status">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="บทบาท" name="role">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="ชื่อ" name="firstName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="นามสกุล" name="lastName">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item label="ที่อยู่" name="address">
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="จังหวัด" name="province">
            <Select placeholder="เลือกจังหวัด" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="เขต/อำเภอ" name="district">
            <Select placeholder="เลือกเขต/อำเภอ" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

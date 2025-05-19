// component/Form/VolunteerFormSection.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button } from "antd";

const { Title } = Typography;

export default function VolunteerForm() {
  return (
    <>
      <Divider />
      <Title level={4}>ข้อมูลเกี่ยวกับอาสา</Title>

      <Row gutter={16}>
        <Col span={7}>
          <Form.Item label="ประเภทรถยนต์" name="cowType">
            <Select placeholder="เลือกประเภทรถยนต์" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="ทะเบียนรถยนต์" name="vehicleNo">
            <Input />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="น้ำหนักรวมสูงสุด (kg)" name="weight">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="เครือข่าย" name="equipment">
            <Select placeholder="เลือกเครือข่าย" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="ละติจูด" name="latitude">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="ลองจิจูด" name="longitude">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="โลเคชั่น" name="map">
            <Button icon={<EnvironmentOutlined />} type="primary" className="!bg-green-500 !border-none">
              choose your map
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

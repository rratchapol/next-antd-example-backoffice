// component/Form/VolunteerFormSection.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button } from "antd";

const { Title } = Typography;

export default function VillageForm() {
  return (
    <>
      <Divider />
      <Title level={4}>ข้อมูลเกี่ยวหมู่บ้าน</Title>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="ชื่อหมู่บ้าน" name="vehicleNo">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="จํานวนประชากร" name="weight">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="ชุมชน" name="equipment">
            <Select placeholder="เลือกชุมชน" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="ละติจูด" name="latitude">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="ลองจิจูด" name="longitude">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
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

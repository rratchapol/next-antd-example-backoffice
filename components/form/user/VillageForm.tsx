// component/Form/VolunteerFormSection.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button, message } from "antd";

const { Title } = Typography;

export default function VillageForm() {
    const [form] = Form.useForm();

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
      },
      () => {
      }
    );
  };
  return (
    <>
      <Divider />
      <Title level={4}>ข้อมูลเกี่ยวหมู่บ้าน</Title>

      <Form form={form} layout="vertical">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="ชื่อหมู่บ้าน" name="community_name">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="จํานวนประชากร" name="population">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="ชุมชน" name="community_id">
            <Select placeholder="เลือกชุมชน" />
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
           <Form.Item label="โลเคชั่น" name="map">
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
      </Form>
    </>
  );
}

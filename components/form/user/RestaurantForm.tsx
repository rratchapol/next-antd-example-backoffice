// component/Form/VolunteerFormSection.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button } from "antd";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function RestaurantForm() {

      // Optional: handle file change
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <Divider />
      <Title level={4}>ข้อมูลเกี่ยวกับร้านค้า</Title>

      <Row gutter={16}>
        <Col span={7}>
          <Form.Item
            label="Logo ร้าน"
            name="logo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="logo"
              listType="picture-card"
              beforeUpload={() => true} // Prevent auto upload
              maxCount={1}
              onPreview={() => {
                    window.open("/assets/sos_logo.png", "_blank");
              }}            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={7}>
          <Form.Item label="ชื่อร้าน" name="vehicleNo">
            <Input />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label="ตำเเหน่งในร้าน" name="weight">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="แบรนด์" name="equipment">
            <Select placeholder="เลือกแบรนด์" />
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

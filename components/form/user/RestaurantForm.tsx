// component/Form/VolunteerFormSection.tsx
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, Input, Typography, Divider, Button } from "antd";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function RestaurantForm() {
  const [form] = Form.useForm();
      // Optional: handle file change
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

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
        console.log("ตำแหน่งที่ได้:", position.coords.latitude, position.coords.longitude);
      },
      () => {
      }
    );
  };

  return (
    <>
      <Divider />
      <Title level={4}>ข้อมูลเกี่ยวกับร้านค้า</Title>

      <Form form={form} layout="vertical">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
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
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="ชื่อร้าน" name="restaurant_name">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Form.Item label="ตำเเหน่งในร้าน" name="job_position">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item label="แบรนด์" name="restaurant_branch_id">
            <Select placeholder="เลือกแบรนด์" />
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
                location
              </Button>
          </Form.Item>
        </Col>
      </Row>
      </Form>
    </>
  );
}

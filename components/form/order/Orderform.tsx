// UserForm.tsx
"use client";

import { Form, Input, Button, Row, Col, Divider, Select, DatePicker, Typography, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import OrderCard from "./OrderCard";
import { useState } from "react";
import OrderDetailModal from "./OrderDetailModal";

const { Title, Text } = Typography;

type UserFormProps = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  userId?: string;
};

export default function OrderForm({ onSubmit, onCancel, userId }: UserFormProps) {
  const [form] = useForm();
  const sampleImages = Array(5).fill('https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg');

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setPreviewImage(img);
    setPreviewVisible(true);
  };

  const orderList = [
  {
    contact: "OrderID#11/2",
    shapeTitle: "หูหิ้วและรูปทรง",
    shapeDesc: "62 หูกิ่ง 1 ก. สูงมีก ค่าผลิต ส่งผสม ดำและสุขขาวสีดำลูกสีต่างๆ 20000",
    logoTitle: "สีโลโก้ บรรดาโลโก้ กกกกก",
    logoDesc: "11 หูกิ่ง 1 ก. สูงมีก ค่าผลิต ส่งผสม ดำและสุขขาวสีดำลูกสีต่างๆ 20000 Tel. 0212321312",
    details: [
      { label: "จำนวนกำลัง", value: "จำนวน" },
      { label: "มีน้ำเชิญ", value: "1" },
      { label: "ขนมเค้ก", value: "1" },
      { label: "ขนมแปก", value: "1" },
    ],
    note: "น้องต้องมาร์ท 13 การเล่น",
    images: ['https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg'].slice(0, 6),
  },
  {
    contact: "OrderID#11/2",
    shapeTitle: "หูหิ้วและรูปทรง",
    shapeDesc: "62 หูกิ่ง 1 ก. สูงมีก ค่าผลิต ส่งผสม ดำและสุขขาวสีดำลูกสีต่างๆ 20000",
    logoTitle: "สีโลโก้ บรรดาโลโก้ กกกกก",
    logoDesc: "11 หูกิ่ง 1 ก. สูงมีก ค่าผลิต ส่งผสม ดำและสุขขาวสีดำลูกสีต่างๆ 20000 Tel. 0212321312",
    details: [
      { label: "จำนวนกำลัง", value: "จำนวน" },
      { label: "มีน้ำเชิญ", value: "1" },
      { label: "ขนมเค้ก", value: "1" },
      { label: "ขนมแปก", value: "1" },
    ],
    note: "น้องต้องมาร์ท 13 การเล่น",
    images: ['https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg'].slice(0, 6),
  },
    {
    contact: "OrderID#11/2",
    shapeTitle: "หูหิ้วและรูปทรง",
    shapeDesc: "62 หูกิ่ง 1 ก. สูงมีก ค่าผลิต ส่งผสม ดำและสุขขาวสีดำลูกสีต่างๆ 20000",
    logoTitle: "สีโลโก้ บรรดาโลโก้ กกกกก",
    logoDesc: "11 หูกิ่ง 1 ก. สูงมีก ค่าผลิต ส่งผสม ดำและสุขขาวสีดำลูกสีต่างๆ 20000 Tel. 0212321312",
    details: [
      { label: "จำนวนกำลัง", value: "จำนวน" },
      { label: "มีน้ำเชิญ", value: "1" },
      { label: "ขนมเค้ก", value: "1" },
      { label: "ขนมแปก", value: "1" },
    ],
    note: "น้องต้องมาร์ท 13 การเล่น",
    images: ['https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg', 'https://f.ptcdn.info/999/032/000/1435824084-1088721670-o.jpg'].slice(0, 6),
  },
  // เพิ่ม order อื่น ๆ ตามต้องการ
];

  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleViewDetails = (order: any) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  return (
    <>
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      className="w-full mt-2 bg-white p-4"
    >
      <Title level={4}>ข้อมูลออเดอร์</Title>
      <Row gutter={24}>
        {/* ซ้าย: ข้อมูลออเดอร์ */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 0]}>
            <Col xs={24}>
              <Form.Item label="ชื่อร้านค้า" name="username">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="ที่อยู่" name="address">
                <Input.TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="ชื่อผู้ติดต่อ" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="เบอร์โทร" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="จำนวนตะกร้า" name="basketCount">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="น้ำหนัก" name="weight">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>

        {/* ขวา: รูปภาพสินค้า */}
      <Col xs={24} md={12}>
        <div className="mb-3">
          <Text strong>รูปภาพสินค้า</Text>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {sampleImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gray-100 rounded overflow-hidden w-full"
              style={{ minWidth: 0 }}
            >
              <img
                src={img}
                alt={`Product ${idx + 1}`}
                className="w-full h-full object-cover"
                onClick={() => handleImageClick(img)}
              />
            </div>
          ))}
        </div>
      </Col>
      </Row>

      <Divider className="my-6" />
      <Row gutter={24}>
        {orderList.map((order, idx) => (
          <Col xs={24} md={12} lg={8} key={idx}>
            <OrderCard order={order} onViewDetails={() => handleViewDetails(order)} />
          </Col>
        ))}
      </Row>
    </Form>
    <OrderDetailModal
      open={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      order={selectedOrder}
    />
    {/* Modal สำหรับแสดงรูปขนาดใหญ่ */}
    <Modal
        open={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
        centered >
        <img alt="Preview" src={previewImage ?? ''} className="w-full h-auto rounded" />
    </Modal>
    </>
  );
}

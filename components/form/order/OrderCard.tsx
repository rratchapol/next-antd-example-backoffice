import { Card, Button, Typography, Divider, Modal } from "antd";
import { useState } from "react";
const { Title, Text } = Typography;

type OrderCardProps = {
  order: {
    contact: string;
    handleUpload?: () => void;
    shapeTitle: string;
    shapeDesc: string;
    logoTitle: string;
    logoDesc: string;
    details: { label: string; value: string }[];
    note: string;
    images: string[];
  };
};

 const statusorder = "ยังไม่สำเร็จ";

export default function OrderCard({ order, onViewDetails }: { order: OrderCardProps["order"], onViewDetails: () => void }) {

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
  
    const handleImageClick = (img: string) => {
      setPreviewImage(img);
      setPreviewVisible(true);
    };
    
  return (
    <>
    <Card className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <Title level={5} type="secondary" >{order.contact}</Title>
        <Button type="link" danger size="small" onClick={order.handleUpload} className="!border !border-red-500 !bg-red-100 hover:bg-red-50">
          {statusorder}
        </Button>
      </div>
      <Divider className="bg-gray-200"/>
      <Title level={5} className="mb-2">{order.shapeTitle}</Title>
      <Text className="text-sm text-gray-600 block mb-4">{order.shapeDesc}</Text>
      <Title level={5} className="mb-2">{order.logoTitle}</Title>
      <Text className="text-sm text-gray-600 block mb-4">{order.logoDesc}</Text>
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        {order.details.map((d, i) => (
          <div className="flex justify-between" key={i}>
            <span>{d.label}</span>
            <span>{d.value}</span>
          </div>
        ))}
      </div>
      <Text className="text-xs text-gray-500 block mb-3">{order.note}</Text>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {order.images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-square bg-gray-100 rounded overflow-hidden w-full"
            style={{ minWidth: 0 }}
          >
            <img
              src={img}
              alt={`Order Image ${idx + 1}`}
              className="w-full h-full object-cover"
              onClick={() => handleImageClick(img)}
            />
          </div>
        ))}
      </div>
      <Divider className="bg-gray-200"/>
        <Button className="w-full justify-center text-color-primary" type="link"   onClick={onViewDetails}>
          ดูข้อมูลเพิ่มเติม
        </Button>
    </Card>
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
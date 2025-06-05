import { Card, Button, Typography, Divider } from "antd";
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

export default function OrderCard({ order }: { order: OrderCardProps["order"] }) {
  return (
    <Card className="bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <Title level={5} type="secondary" >{order.contact}</Title>
        <Button type="link" danger size="small" onClick={order.handleUpload}>
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
      <div className="grid grid-cols-4 gap-2">
        {order.images.map((img, idx) => (
          <div key={idx} className="aspect-square bg-gray-100 rounded overflow-hidden" style={{width: 100, height: 100}}>
            <img src={img} alt={`Order Image ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <Divider className="bg-gray-200"/>
        <Button className="w-full justify-center text-color-primary" type="link"   onClick={order.handleUpload}>
          ดูข้อมูลเพิ่มเติม
        </Button>
    </Card>
  );
}
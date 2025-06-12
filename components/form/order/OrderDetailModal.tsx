import { Modal, Timeline, Button } from "antd";
import { useState } from "react";
import type { FC } from "react";
import OrderStatus from "./OrderStatus";

type Props = {
  open: boolean;
  onClose: () => void;
  order: any;
};

const OrderDetailModal: FC<Props> = ({ open, onClose, order }) => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order: any) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };
  
  if (!order) return null;

  return (
    <>
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title="Order Information"
      width={600}
      closable={true}
      style={{ top: 20 }}
    >
      <div className="mb-5">
        <h3 className="text-lg font-bold mb-4">
          OrderID#{order.contact?.split("#")[1] || "11/2"}
        </h3>
        
        <div className="flex justify-between mb-4">
          <div className="flex-1 pr-4">
            <p className="font-bold mb-2">ผู้ส่ง</p>
            <p className="text-xs leading-tight m-0">
              62 หมู่ที่ 1 ต.สนุนทิน ต.นาบิว อ.ท่าหนองเมื่อยชุด 20000
            </p>
          </div>
          <div className="flex-1 pl-4">
            <p className="font-bold mb-2">ผู้รับ</p>
            <p className="text-xs leading-tight m-0">
              11 หมู่ที่ 1 ต.สนุนทิน ต.นาบิว อ.ท่าหนองเมื่อยชุด 20000 Tel. 0212321312
            </p>
          </div>
        </div>

        <div className="flex justify-between mb-5">
          <div>
            <p className="font-bold mb-2">เวลาสั่งซื้อ</p>
            <p className="text-xs m-0">06 Jan 2025, 12:18</p>
          </div>
          <div>
            <p className="font-bold mb-2">น้ำหนัก</p>
            <p className="text-xs m-0">13 กิโลกรัม</p>
          </div>
        </div>

        <div className="flex gap-2 mb-5">
          <Button 
            type="primary" 
            onClick={handleViewDetails}
            className="!bg-green-500 !border-green-500 !hover:bg-green-600 !hover:border-green-600"
          >
            แก้ไขสถานะ
          </Button>
          {/* <Button className="text-green-500 border-green-500 hover:text-green-600 hover:border-green-600">
            ยกเลิกออเดอร์
          </Button> */}
        </div>
      </div>

      <div>
        <div className="border-b border-gray-200 mb-4">
          <div className="flex">
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-4 py-2 border-none bg-transparent cursor-pointer font-medium ${
                activeTab === 'delivery' 
                  ? 'text-green-500 border-b-2 border-green-500 -mb-px' 
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              การสั่งซื้อ
            </button>
            <button
              onClick={() => setActiveTab('foodlist')}
              className={`px-4 py-2 border-none bg-transparent cursor-pointer font-medium ${
                activeTab === 'foodlist' 
                  ? 'text-green-500 border-b-2 border-green-500 -mb-px' 
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              รายการอาหาร
            </button>
          </div>
        </div>

        {activeTab === 'delivery' ? (
          <Timeline>
            <Timeline.Item 
              color="green" 
              dot={<div className="w-2 h-2 bg-green-500 rounded-full" />}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">ส่งของเรียบร้อยแล้ว</div>
                  <div className="text-xs text-gray-600">06 Jan 2025, 14:22</div>
                </div>
                <span className="bg-green-50 text-green-500 px-2 py-1 rounded text-xs border border-green-200">
                  ดำเนินการเสร็จ
                </span>
              </div>
            </Timeline.Item>
            
            <Timeline.Item color="gray">
              <div>
                <div className="font-bold">กำลังจัดเตรียมไปส่ง</div>
                <div className="text-xs text-gray-600">06 Jan 2025, 13:40</div>
              </div>
            </Timeline.Item>
            
            <Timeline.Item color="gray">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">เข้ารับอาหารจากผู้บริจาค</div>
                  <div className="text-xs text-gray-600">06 Jan 2025, 13:00</div>
                </div>
                <span className="bg-green-50 text-green-500 px-2 py-1 rounded text-xs border border-green-200">
                  ดำเนินการเสร็จ
                </span>
              </div>
            </Timeline.Item>
            
            <Timeline.Item color="gray">
              <div>
                <div className="font-bold">กำลังเดินทางเข้ารับสองสาก</div>
                <div className="text-xs text-gray-600">06 Jan 2025, 12:20</div>
              </div>
            </Timeline.Item>
            
            <Timeline.Item color="gray">
              <div>
                <div className="font-bold">ยืนยันออเดอร์</div>
                <div className="text-xs text-gray-600">06 Jan 2025, 12:18</div>
              </div>
            </Timeline.Item>
          </Timeline>
        ) : (
          <div className="py-5">
            <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-3">
              <div className="flex-1">
                <div className="font-bold mb-1">ข้าวผัดกุ้ง</div>
                <div className="text-xs text-gray-600">จำนวน: 3 ตะกร้า</div>
                <div className="text-xs text-gray-600">น้ำหนัก: 2.5 กก.</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-3">
              <div className="flex-1">
                <div className="font-bold mb-1">ต้มยำกุ้ง</div>
                <div className="text-xs text-gray-600">จำนวน: 5 ตะกร้า</div>
                <div className="text-xs text-gray-600">น้ำหนัก: 4.2 กก.</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-3">
              <div className="flex-1">
                <div className="font-bold mb-1">ส้มตำไทย</div>
                <div className="text-xs text-gray-600">จำนวน: 2 ตะกร้า</div>
                <div className="text-xs text-gray-600">น้ำหนัก: 1.8 กก. </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <span className="font-bold">รวมน้ำหนักทั้งหมด</span>
              <span className="font-bold text-green-500">8.5 กก.</span>
            </div>
          </div>
        )}
      </div>

      <div className="text-right mt-5">
        <Button 
          type="primary" 
          onClick={onClose}
          className="!bg-green-500 !border-green-500 !hover:bg-green-600 !hover:border-green-600" 
        >
          ปิด
        </Button>
      </div>
    </Modal> 
    <OrderStatus
      open={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      order={selectedOrder}
    />
    </>
  );
};

export default OrderDetailModal;
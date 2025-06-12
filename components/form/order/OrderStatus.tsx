import { Modal, Button, Form, Select } from "antd";
import type { FC } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  order: any;
};

const OrderStatus: FC<Props> = ({ open, onClose, order }) => {
  const [form] = Form.useForm();

  if (!order) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title="Order Information"
      closable
    >
      <Form form={form} layout="vertical" initialValues={{ status: order.status || "active" }}>
        <Form.Item label="สถานะ" name="status">
          <Select placeholder="เลือกสถานะ">
            <Select.Option value="active">Active</Select.Option>
            <Select.Option value="inactive">Inactive</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      <div className="text-right mt-5 space-x-2">
        <Button
          type="primary"
          onClick={onClose}
          className="!bg-red-500 !border-red-500 !hover:bg-red-600 !hover:border-red-600"
        >
          ยกเลิกออเดอร์
        </Button>
        <Button
          type="primary"
          onClick={onClose}
          className="!bg-green-500 !border-green-500 !hover:bg-green-600 !hover:border-green-600"
        >
          บันทึกสถานะ
        </Button>
      </div>
    </Modal>
  );
};

export default OrderStatus;
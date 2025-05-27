//components/popup/PopUp.tsx

import { Modal } from "antd";

type PopUpProps = {
  open: boolean;
  title?: string;
  content?: string;
  onOk: () => void;
  onCancel: () => void;
  okText?: string;
  cancelText?: string;
};

export default function PopUp({
  open,
  title = "ยืนยันการบันทึกข้อมูล",
  content = "คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?",
  onOk,
  onCancel,
  okText = "บันทึก",
  cancelText = "ยกเลิก",
}: PopUpProps) {
  return (
    <Modal
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      maskClosable={false}
      destroyOnClose
    >
      {content}
    </Modal>
  );
}
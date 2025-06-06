//components/popup/PopUp.tsx

import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";


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
    >
      {content}
    </Modal>
  );
}


export function PopUpLoginFail({
  open,
  title = "เข้าสู่ระบบไม่สำเร็จ",
  content = "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
  onOk,
  onCancel,
  okText = "ตกลง",
}: PopUpProps) {
  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      centered
      style={{
        textAlign: "center",
        padding: "32px 24px",
        borderRadius: 16,
        // boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ExclamationCircleOutlined style={{ color: "#faad14", fontSize: 56, marginBottom: 16 }} />
        <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 8 }}>{title}</div>
        <div style={{ color: "#666", marginBottom: 24 }}>{content}</div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={onOk}
            style={{
              background: "#faad14",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 32px",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {okText}
          </button>
        </div>
      </div>
    </Modal>
  );
}


export  function PopUpTest({
  open,
  title ,
  content ,
  onOk,
  onCancel,
  okText ,
  cancelText ,
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
    >
      {content}
    </Modal>
  );
}

export  function PopUpUpdate({
  open,
  title = "ยืนยันการอัปเดตข้อมูล",
  content = "คุณต้องการอัปเดตข้อมูลนี้ใช่หรือไม่?",
  onOk,
  onCancel,
  okText = "อัปเดต",
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
      >
      {content}
    </Modal>
  );
}
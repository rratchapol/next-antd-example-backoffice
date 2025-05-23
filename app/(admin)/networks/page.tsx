

import NetworkTable from "@/components/tables/NetworkTable";
import UserTable  from "@/components/tables/UserTable";
import { message } from "antd";

export default function UserPage() {


  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อมูลเครือข่าย</h1>
      <NetworkTable  />
    </div>
  );
}

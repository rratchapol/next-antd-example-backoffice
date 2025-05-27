

import BrandTable from "@/components/tables/BrandTable";
import UserTable  from "@/components/tables/UserTable";
import { message } from "antd";

export default function UserPage() {


  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อมูลแบรนด์</h1>
      <BrandTable />
    </div>
  );
}

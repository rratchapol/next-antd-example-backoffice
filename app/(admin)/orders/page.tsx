"use client";
import OrderTable from "@/components/tables/OrderTable";

export default function UserPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อมูลรายการคำสั่ง</h1>
      <OrderTable />
    </div>
  );
}
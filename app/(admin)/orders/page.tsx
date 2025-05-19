import DataTable from "@/components/tables/DataTable";

export default function UserPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อมูลรายการคำสั่ง</h1>
      <DataTable />
    </div>
  );
}
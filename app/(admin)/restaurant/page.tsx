
"use client";
import RestaurantTable from "@/components/tables/RestaurantTable";


export default function UserPage() {


  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ข้อมูลร้านค้า</h1>
      <RestaurantTable  />
    </div>
  );
}

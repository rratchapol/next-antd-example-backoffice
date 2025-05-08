export default function DashboardPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">ยอดผู้ใช้งาน</h2>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">รายการสินค้า</h2>
            <p className="text-3xl font-bold">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">ยอดขายวันนี้</h2>
            <p className="text-3xl font-bold">฿12,345</p>
          </div>
        </div>
      </div>
    );
  }
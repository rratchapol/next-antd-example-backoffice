
import LoginForm from "@/components/auth/LoginForm";


export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">เข้าสู่ระบบเพื่อจัดการข้อมูล</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
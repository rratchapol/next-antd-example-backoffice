// app/(navbar)/layout.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import Navbar from '@/components/dashboard/Navbar';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { message } from 'antd';



export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {user, isAuthenticated} = useAuth();

  if(user){
    console.log("ดู ข้อมูลผู้ใช้", user);

  }
  if (!isAuthenticated) {
    message.error("กรุณาเข้าสู่ระบบ");
    console.log("ออกจากระบบ");
    window.location.href = "/login"; // Redirect to login page
    return null; // Prevent rendering the component
  }

  return (
    // <AuthProvider>
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user ? { name: (user as any).customer.name } : undefined}>
        <main className="p-4 md:p-8">{children}</main>
      </Navbar >
    </div>
    // </AuthProvider>
  );
}




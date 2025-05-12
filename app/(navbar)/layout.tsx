// app/(navbar)/layout.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import Navbar from '@/components/dashboard/Navbar';

type JwtPayload = {
  exp: number;
  [key: string]: any;
};

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/login');
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        router.replace('/login');
      } else {
        setAuthorized(true);
      }
    } catch (err) {
      localStorage.removeItem('token');
      router.replace('/login');
    }
  }, []);

  if (!authorized) return null; 

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}

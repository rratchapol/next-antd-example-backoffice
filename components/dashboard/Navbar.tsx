"use client";

import { useState, useEffect } from "react";
import { Layout, Button, Drawer } from "antd";
import {
  MenuOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header } = Layout;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { key: "/dashboard", label: "Dashboard" },
    { key: "/users", label: "ผู้ใช้งาน" },
    { key: "/restaurant", label: "ร้านค้า" },
    { key: "/community", label: "ชุมชน" },
    { key: "/brands", label: "แบรนด์" },
    { key: "/networks", label: "เครือข่าย" },
    { key: "/orders", label: "รายการคำสั่ง" },
  ];

  return (
    <>
      <Header className="bg-white shadow-sm px-4 flex items-center justify-between w-full" style={{ backgroundColor: "#ffffff" }}>

        <div className="flex items-center gap-8">
          <span className="text-xl font-bold">Admin</span>

          {mounted && (
            <nav className="hidden lg:flex gap-10">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.key}
                  className={`font-medium ${
                    pathname === item.key
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="md:hidden"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
          />
          <Link href="/login">
            <Button
              className="hidden md:flex items-center"
              icon={<LogoutOutlined />}
            >
              ออกจากระบบ
            </Button>
          </Link>
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={250}
      >
        <div className="flex flex-col gap-4 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.key}
              className={`block font-medium ${
                pathname === item.key
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/login">
            <Button
              block
              icon={<LogoutOutlined />}
              className="mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              ออกจากระบบ
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
}

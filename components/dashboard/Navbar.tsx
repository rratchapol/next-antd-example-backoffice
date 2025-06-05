'use client';
import React, { ReactNode, useState } from 'react';
import { Avatar, Dropdown, Layout, Menu, Button, Drawer, MenuProps } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DashboardOutlined,
  UsergroupDeleteOutlined,
  HistoryOutlined,
  ApartmentOutlined,
  BankOutlined,
  ShopOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import SubMenu from 'antd/es/menu/SubMenu';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
const { Sider, Header, Content } = Layout;

interface Props {
  children: ReactNode;
  user?: {
    name?: {
      firstname?: string;
      lastname?: string;
    }
  };
}

const Navbar: React.FC<Props> = ({ children, user }) => {
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navkey, setNavkey] = useState('1');
  const  pathname  = usePathname();

  // Map path → key
const pathToKey: Record<string, string> = {
  '/dashboard': '1',
  '/users': '2',
  '/community': '3',
  '/restaurant': '4',
  '/brands': '5',
  '/networks': '6',
  '/orders': '7',
};

// ใช้ค่า key จาก path ปัจจุบัน
const selectedKey = pathToKey[pathname] || '1';

  const menuItems: MenuProps['items']  = [
    {
      key: 'profile',
      label: 'รายละเอียดผู้ใช้',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      danger: true,
      icon: <LogoutOutlined />,
      label: 'ล็อคเอ้าท์',
      onClick: () => {
        console.log('Logout');
        logout();
      }
    },
];

  // Sidebar menu
  const sideMenu = (
    <Menu theme="light" mode="inline" defaultSelectedKeys={[selectedKey]} >
      <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => setNavkey('1')}>
        <Link href="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />} onClick={() => setNavkey('2')}>
        <Link href="/users">ผู้ใช้งาน</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UsergroupDeleteOutlined />} onClick={() => setNavkey('3')}>
        <Link href="/community">ชุมชน</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<ShopOutlined />} title="ร้านค้า">
        <Menu.Item key="4" icon={<ShopOutlined />} onClick={() => setNavkey('4')}>
          <Link href="/restaurant">ร้านค้า</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<BankOutlined />} onClick={() => setNavkey('5')}>
          <Link href="/brands">เเบรนด์</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="6" icon={<ApartmentOutlined />} onClick={() => setNavkey('6')}>
        <Link href="/networks">เครือข่าย</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<HistoryOutlined />} onClick={() => setNavkey('7')}>
        <Link href="/orders">รายการคำสั่ง</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      {/* Header */}
      <Header
        style={{
          background: '#1BC367',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 56,
        }}
        className="!px-4"
      >
        
        {/* Hamburger for mobile */}
        <div className="flex items-center md:hidden ">
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24, color: '#fff' }} />}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
       <div className="flex-1" />
        {/* User info */}
        <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={['click']} className="cursor-pointer justify-end">
          <div className="flex items-center space-x-2 cursor-pointer ">
            <Avatar
              src={"/assets/pic_icon.png"}
              icon={<UserOutlined />}
              style={{ backgroundColor: '#fff' }}
            />
            <span className="text-white font-semibold px-2 whitespace-nowrap">
              {user ? `${user?.name?.firstname ?? ''} ${user?.name?.lastname ?? ''}` : 'User'}
            </span>
          </div>
        </Dropdown>
      </Header>

      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar for desktop */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          style={{ backgroundColor: 'white' }} // ลบ display: 'none'
          className="hidden md:block"
          theme="light"
          width={220}
        >
          {sideMenu}
        </Sider>

        {/* Drawer for mobile */}
        <Drawer
          title="เมนู"
          placement="left"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{ body: { padding: 0 } }}
          className="md:hidden"
        >
          {sideMenu}
        </Drawer>

        {/* Main Content */}
        <Layout>
          <Content style={{ margin: '16px' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Navbar;



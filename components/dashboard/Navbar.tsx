import React, { ReactNode } from 'react';
import { Avatar, Dropdown, Layout, Menu, MenuProps } from 'antd';
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
} from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const { Sider, Header, Content } = Layout;

interface Props {
  children: ReactNode;
    user?: {
    name?: string;
  };
}

const Navbar: React.FC<Props> = ({ children,user }) => {

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
    },
];

  return (
    console.log("ดู ข้อมูลผู้ใช้ccc",user),
    <Layout>
      {/* Navbar Header */}
    <Header style={{ background: '#1BC367', padding: '0 24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={['click']}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar
              src={"/assets/pic_icon.png" }
              icon={<UserOutlined />}
              style={{ backgroundColor: '#fff' }}
            />
            {/* <span className="text-white font-semibold px-2">{user?.name || 'User'}</span> */}
            <span className="text-white font-semibold px-2">{'User'}</span>

          </div>
        </Dropdown>
    </Header>

    <Layout style={{ minHeight: '100vh' }} >
      {/* Sidebar */}
      <Sider collapsible style={{ backgroundColor: 'white' }} theme="light">
        {/* <div style={{ height: 32, margin: 16, color: '#000', textAlign: 'center' }}>
          SOS Admin
        </div> */}
        <Menu  theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link href="/users">ผู้ใช้งาน</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UsergroupDeleteOutlined />}>
            <Link href="/community">ชุมชน</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ShopOutlined />}>
            <Link href="/restaurant">ร้านค้า</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<BankOutlined />}>
            <Link href="/brands">เเบรนด์</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ApartmentOutlined />}>
            <Link href="/networks">เครือข่าย</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<HistoryOutlined />}>
            <Link href="/orders">รายการคำสั่ง</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content Layout */}
      <Layout>

        {/* Main Page Content */}
        <Content style={{ margin: '16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
    </Layout>
  );
};

export default Navbar;



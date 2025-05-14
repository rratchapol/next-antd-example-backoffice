// components/SidebarLayout.tsx
import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
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

const { Sider, Header, Content } = Layout;

interface Props {
  children: ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible style={{ backgroundColor: '' }}>
        <div style={{ height: 32, margin: 16, color: 'white', textAlign: 'center' }}>
          SOS Admin
        </div>
        <Menu  theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link href="/">Dashboard</Link>
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
        {/* Navbar Header */}
        <Header style={{ background: '#001529', padding: '0 24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <LogoutOutlined style={{ fontSize: '18px', cursor: 'pointer', color: 'white' }} title="ออกจากระบบ" />
        </Header>

        {/* Main Page Content */}
        <Content style={{ margin: '16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;

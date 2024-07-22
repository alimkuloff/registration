import "./Sider.css";
import { NavLink, Outlet } from "react-router-dom";
import { Layout, Button, Menu, Input, Typography, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Sider, Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const onSearch = () => {
  // Search function implementation
};

const SiderComponent = ({ collapsed, setCollapsed }) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="custom-sider">
        <Title level={3} className="text-center custom-title">Logo</Title>
        <Menu
          theme="dark"
          mode="inline"
          className="custom-menu"
          items={[
            {
              key: '1',
              icon: <MenuFoldOutlined />,
              label: <NavLink end className="custom-link" to="/dashboard">Products</NavLink>
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <NavLink className="custom-link" to="/dashboard/users">Users</NavLink>
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header className="custom-header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="trigger-button"
          />
          <Search
            placeholder="Search..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            className="custom-search"
          />
          <Avatar size={48} icon={<UserOutlined />} className="custom-avatar"/>
        </Header>
        <Content className="custom-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SiderComponent;

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminPanel = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            Devices
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<NotificationOutlined />}
            title="Notifications">
            <Menu.Item key="3">Email</Menu.Item>
            <Menu.Item key="4">SMS</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>{/* Content, Breadcrumb, etc. */}</Layout>
    </Layout>
  );
};

export default AdminPanel;

import {
  LaptopOutlined,
  LogoutOutlined,
  MoneyCollectOutlined,
  RollbackOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider, Footer } = Layout;

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleBackToWebsite = () => {
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ backgroundColor: "#6E7254" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}>
          <div>
            <Menu
              style={{ backgroundColor: "#6E7254", paddingTop: "30px" }}
              defaultSelectedKeys={["1"]}
              mode="inline">
              {/* <SubMenu
            key="sub1"
            icon={<NotificationOutlined />}
            title="Items">
            <Menu.Item key="3">Women</Menu.Item>
            <Menu.Item key="4">Men</Menu.Item>
          </SubMenu> */}
              <Menu.Item key="1" icon={<LaptopOutlined />}>
                <div style={{ fontWeight: "bold" }}>Items</div>
              </Menu.Item>
              <Menu.Item key="2" icon={<MoneyCollectOutlined />}>
                <div style={{ fontWeight: "bold" }}>Offers</div>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <div style={{ fontWeight: "bold" }}>Users</div>
              </Menu.Item>
              {/* <Menu.Item
            key="4"
            icon={<RollbackOutlined />}
            onClick={handleBackToWebsite}>
            Back to Website
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            LogOut
          </Menu.Item> */}
            </Menu>
          </div>

          <div>
            <Menu style={{ backgroundColor: "#6E7254" }}>
              <Menu.Item
                key="4"
                icon={<RollbackOutlined />}
                onClick={handleBackToWebsite}>
                Back to Website
              </Menu.Item>
              <Menu.Item key="5" icon={<LogoutOutlined />}>
                LogOut
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Sider>
      <Layout>{/* Content, Breadcrumb, etc. */}</Layout>
    </Layout>
  );
};

export default AdminPanel;

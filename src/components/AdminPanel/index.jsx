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
import logo from "../../assets/img/Picture1.png";

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
              style={{ backgroundColor: "#6E7254" }}
              defaultSelectedKeys={["1"]}
              mode="inline">
              <div
                style={{
                  width: "180px",
                  height: "80px",
                  alignItems: "center",
                  padding: "20px 20px 0px 20px",
                  marginBottom: "40px",
                }}>
                <img src={logo} alt="logo" />
              </div>
              {/* <SubMenu
            key="sub1"
            icon={<NotificationOutlined />}
            title="Items">
            <Menu.Item key="3">Women</Menu.Item>
            <Menu.Item key="4">Men</Menu.Item>
          </SubMenu> */}
              <Menu.Item key="1" icon={<LaptopOutlined />}>
                Items
              </Menu.Item>
              <Menu.Item key="2" icon={<MoneyCollectOutlined />}>
                Offers
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                Users
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

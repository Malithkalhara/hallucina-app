import {
  AppstoreOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const Sidebar = ({ selectedIndex }) => {
  const [open, setOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(0);

  const routeList = [
    {
      name: "Dashboard",
      link: "/app",
      icon: <AppstoreOutlined />,
      activeIndex: 0,
      requiredRoles: ["admin"],
    },
    {
      name: "Appointments",
      link: "/appointments",
      icon: <CalendarOutlined />,
      activeIndex: 1,
      requiredRoles: ["admin"],
    },
    {
      name: "Billing",
      link: "/billing",
      icon: <DollarCircleOutlined />,
      activeIndex: 2,
      requiredRoles: ["admin"],
    },
    {
      name: "Services",
      link: "/services",
      icon: <UserOutlined />,
      activeIndex: 3,
      requiredRoles: ["admin"],
    },
    {
      name: "Offers",
      link: "/offers",
      icon: <UserOutlined />,
      activeIndex: 4,
      requiredRoles: ["admin"],
    },
    {
      name: "Customers",
      link: "/customers",
      icon: <TeamOutlined />,
      activeIndex: 5,
      requiredRoles: ["admin"],
    },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleClick = (index) => {
    setSelectedRoute(index);
  };

  return (
    <div>
      <Drawer
        title="Navigation"
        placement="left"
        closable={false}
        onClose={toggleDrawer}
        open={open}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[String(selectedRoute)]}>
          {routeList.map((route, index) => (
            <Menu.Item key={index} onClick={() => handleClick(index)}>
              <Link to={route.link}>
                {route.icon}
                <span>{route.name}</span>
              </Link>
            </Menu.Item>
          ))}
          <SubMenu
            key="logout"
            title={
              <span>
                <LogoutOutlined />
                <span>Logout</span>
              </span>
            }>
            <Menu.Item key="logout">Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Sidebar;

import { Menu } from "antd";
import { IoMdHome } from "react-icons/io";
import { IoShieldHalfSharp } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";
import type { MenuProps } from "antd";

import { useLocation, Link } from "@remix-run/react";

const Sidebar = () => {
  const location = useLocation();

  const items: MenuProps["items"] = [
    {
      key: "/dashboard",
      icon: <IoMdHome />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "/permissions",
      icon: <IoShieldHalfSharp />,
      label: <Link to="/permissions">Permissions</Link>,
    },
    {
      key: "/email-templates",
      icon: <TbTemplate />,
      label: <Link to="/email-templates">Email Templates</Link>,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]} // Highlight the current route
      items={items}
    />
  );
};

export default Sidebar;

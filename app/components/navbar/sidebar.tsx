import { Menu } from "antd";
import { IoMdHome } from "react-icons/io";
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TbTemplate } from "react-icons/tb";
import type { MenuProps } from "antd";

import { useLocation, Link } from "@remix-run/react";

import { routes } from "~/router/routes";

const Sidebar = () => {
  const location = useLocation();

  const items: MenuProps["items"] = [
    {
      key: routes.DASHBOARD.USERS,
      icon: <FaRegUser />,
      label: <Link to={routes.DASHBOARD.USERS}>Users</Link>,
    },
    {
      key: routes.DASHBOARD.INDEX,
      icon: <IoMdHome />,
      label: <Link to={routes.DASHBOARD.INDEX}>Dashboard</Link>,
    },
    {
      key: routes.DASHBOARD.PERMISSIONS,
      icon: <IoShieldHalfSharp />,
      label: <Link to={routes.DASHBOARD.PERMISSIONS}>Permissions</Link>,
    },
    {
      key: routes.DASHBOARD.EMAIL_TEMPLATES,
      icon: <TbTemplate />,
      label: <Link to={routes.DASHBOARD.EMAIL_TEMPLATES}>Email Templates</Link>,
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

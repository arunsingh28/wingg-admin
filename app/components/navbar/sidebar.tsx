import { Menu } from "antd";
import { IoMdHome } from "react-icons/io";
import { IoShieldHalfSharp } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";
import type { MenuProps } from "antd";
import { Link } from "@remix-run/react";


const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <IoMdHome />,
    label: <Link to={"/dash/home"}>Dashboard</Link>,
  },
  {
    key: "2",
    icon: <IoShieldHalfSharp />,
    label: <Link to={"/dash/permissions"}>Permissions</Link>,
  },
  {
    key: "3",
    icon: <TbTemplate />,
    label:<Link to={"/dash/email-templates"}>Email templates</Link>,
  },
];

const sidebar = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
};

export default sidebar;

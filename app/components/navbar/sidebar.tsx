import { Menu } from "antd";
import { IoMdHome } from "react-icons/io";
import { IoShieldHalfSharp } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";

import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <IoMdHome />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <IoShieldHalfSharp />,
    label: "Permissions",
  },
  {
    key: "3",
    icon: <TbTemplate />,
    label: "Email templates",
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

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
// const items: MenuItem[] = [
//   getItem("栏目 1", "/page1", <PieChartOutlined />),
//   getItem("栏目 2", "/page2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const items: MenuItem[] = [
  {
    label: "栏目1",
    key: "/page1",
    icon: <PieChartOutlined></PieChartOutlined>,
  },

  { label: "栏目2", key: "/page2", icon: <DesktopOutlined></DesktopOutlined> },

  {
    label: "栏目3",
    key: "page3",
    icon: <UserOutlined></UserOutlined>,
    children: [
      {
        label: "栏目301",
        key: "/page3/page301",
      },

      {
        label: "栏目302",
        key: "/page3/page302",
      },

      {
        label: "栏目303",
        key: "/page3/page303",
      },
    ],
  },

  {
    label: "栏目4",
    key: "page4",
    icon: <TeamOutlined></TeamOutlined>,
    children: [
      {
        label: "Team 1",
        key: "/page4/page401",
      },
      {
        label: "Team 2",
        key: "/page4/page402",
      },
    ],
  },
  { label: "栏目5", key: "page5", icon: <FileOutlined></FileOutlined> },
];

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    console.log("点击了菜单", e.key);
    navigateTo(e.key);
  };
  const [openkeys, setOpenkeys] = useState([""]);
  const hdOpenChange = (keys: string[]) => {
    setOpenkeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["/page1"]}
      mode="inline"
      items={items}
      openKeys={openkeys}
      onOpenChange={hdOpenChange}
      onClick={menuClick}
    />
  );
};

export default MainMenu;

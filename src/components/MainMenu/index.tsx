import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { Children, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const currentRoute = useLocation();
  console.log("加载了菜单", currentRoute);
  const menuClick = (e: { key: string }) => {
    console.log("点击了菜单", e.key);
    navigateTo(e.key);
  };

  const hdOpenChange = (keys: string[]) => {
    setOpenkeys([keys[keys.length - 1]]);
  };
  let firstOpenKeys: string = "";
  function findKey(obj: { key: string }) {
    return obj.key === currentRoute.pathname;
  }
  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!["children"] &&
      items[i]!["children"].length > 1 &&
      items[i]!["children"].find(findKey)
    ) {
      console.log(items[i]!.key);
      firstOpenKeys = items[i]!.key as string;
      break;
    }
  }
  const [openkeys, setOpenkeys] = useState([firstOpenKeys]);
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      openKeys={openkeys}
      onOpenChange={hdOpenChange}
      onClick={menuClick}
    />
  );
};

export default MainMenu;

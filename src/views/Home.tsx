import { Breadcrumb, Layout } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainMenu from "@/components/MainMenu";
const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* 侧边栏顶部logo */}
        <div className="logo"></div>
        <MainMenu></MainMenu>
      </Sider>
      {/* 右侧界面 */}
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ paddingLeft: "16px" }}
        >
          {/* 面包屑 */}
          <Breadcrumb className="crumb">
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 内容部分 */}
        <Content
          style={{ margin: "16px 16px 0" }}
          className="site-layout-background"
        >
          <div style={{ padding: 24, minHeight: 360 }}>bill is a cat.</div>
          <Outlet></Outlet>
        </Content>
        {/* 页脚部分 */}
        <Footer
          style={{
            textAlign: "center",
            height: "48px",
            padding: 0,
            lineHeight: "48px",
          }}
        >
          通用后台管理系统 ©2023 Created by fengwenhao
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;

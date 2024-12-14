import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Sidebar from "./components/navbar/sidebar";

import wingLogo from "public/Wingg-Final.png";

import "./tailwind.css";

const { Header, Sider, Content } = Layout;

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout className="fixed top-0 left-0 w-full bottom-0">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="flex items-center justify-center h-16">
              <img
                src={wingLogo}
                alt="Wingg Logo"
                className="h-14 align-super"
              />
            </div>
            <Sidebar />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

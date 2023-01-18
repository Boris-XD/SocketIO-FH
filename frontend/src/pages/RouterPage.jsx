import React from "react";
import {
  BlockOutlined,
  UserOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import Ingresar from "./Ingresar";
import Cola from "./Cola";
import CrearTicket from "./CrearTicket";
import Escritorio from "./Escritorio";
import { useContext } from "react";
import { UIContext } from "../context/UIContext";

const { Content, Sider } = Layout;

const items = [
  {
    label: <Link to="/ingresar">Ingresar</Link>,
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/cola">Cola</Link>,
    key: "2",
    icon: <BlockOutlined />,
  },
  {
    label: <Link to="/crear">Crear Ticket</Link>,
    key: "3",
    icon: <CreditCardOutlined />,
  },
];

const RouterPage = () => {
  const { ocultarMenu } = useContext(UIContext);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        hidden={ocultarMenu}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          height: '100vh',
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0", height: '100vh' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear" element={<CrearTicket />} />
              <Route path="/escritorio" element={<Escritorio />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RouterPage;

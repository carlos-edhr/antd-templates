import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

import {
  DesktopOutlined,
  UserOutlined,
  DollarCircleOutlined
} from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

class Navbar extends Component {
  render() {
    return (
      <Header>
        <div className="logo" />

        <Menu style={{ textAlign: "right" }} theme="dark" mode="horizontal">
          <Menu.Item key="1">Inicio</Menu.Item>
          <Menu.Item key="2"></Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <DesktopOutlined />
                <span>Catalogos</span>
              </span>
            }
          >
            <Menu.Item key="3">Bisagras</Menu.Item>
            <Menu.Item key="4">Accesorios</Menu.Item>
            <Menu.Item key="5">Muebles</Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <DollarCircleOutlined />
            Cotizaciones
          </Menu.Item>
          <Menu.Item key="7">
            <UserOutlined />
            Usuarios
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Navbar;

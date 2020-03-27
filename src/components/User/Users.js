import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Table, Typography } from "antd";
import Navbar from "../Navbar/Navbar";
import BlankFooter from "../Navbar/BlankFooter";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const columns = [
  {
    title: "Usuario",
    dataIndex: "Usuario"
  },
  {
    title: "Nombre",
    dataIndex: "Nombre"
  },
  {
    title: "Telefono",
    dataIndex: "Telefono"
  },
  {
    title: "Celular",
    dataIndex: "Celular"
  },
  {
    title: "Mail",
    dataIndex: "Mail"
  },

  {
    title: "Calle",
    dataIndex: "Calle"
  },
  {
    title: "Colonia",
    dataIndex: "Colonia"
  },
  {
    title: "CodigoPostal",
    dataIndex: "CodigoPostal"
  },
  {
    title: "Ciudad",
    dataIndex: "Ciudad"
  },
  {
    title: "Pais",
    dataIndex: "Pais"
  },
  {
    title: "UsuarioStatus",
    dataIndex: "UsuarioStatus"
  }
];

const data = [];

class Users extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout className="layout">
          <Navbar />
          <Content style={{ padding: "0 200px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Users</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Title style={{ textAlign: "center" }}>Users</Title>
              <Table columns={columns} dataSource={data} size="middle" />
            </div>
          </Content>
          <BlankFooter />
        </Layout>
      </React.Fragment>
    );
  }
}

export default Users;

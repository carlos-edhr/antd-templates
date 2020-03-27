import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Table, Typography } from "antd";
import Navbar from "../Navbar/Navbar";
import BlankFooter from "../Navbar/BlankFooter";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const columns = [
  {
    title: "Codigo",
    dataIndex: "Codigo"
  },
  {
    title: "Nombre",
    dataIndex: "Nombre"
  },
  {
    title: "Costo",
    dataIndex: "Costo"
  },
  {
    title: "Factor",
    dataIndex: "Factor"
  },
  {
    title: "PrecioVenta",
    dataIndex: "PrecioVenta"
  },

  {
    title: "Acciones",
    dataIndex: "Acciones"
  }
];

const data = [
  {
    Codigo: "ANT.EX.C.BM.400.BCO",
    Nombre: "Antaro Cierre Suave Exterior C Blanco",
    Costo: 350,
    Factor: 1.5,
    PrecioVenta: 350
  },
  {
    Codigo: "ANT.EX.C.BM.550.GRS",
    Nombre: "Antaro Cierre Suave Exterior C Gris",
    Costo: 420,
    Factor: 1,
    PrecioVenta: 450
  },
  {
    Codigo: "ANT.EX.C.BM.400.BCO",
    Nombre: "Antaro Cierre Suave Exterior C Blanco",
    Costo: 350,
    Factor: 1.5,
    PrecioVenta: 350
  },
  {
    Codigo: "ANT.EX.C.BM.550.GRS",
    Nombre: "Antaro Cierre Suave Exterior C Gris",
    Costo: 420,
    Factor: 1,
    PrecioVenta: 450
  },
  {
    Codigo: "ANT.EX.C.BM.400.BCO",
    Nombre: "Antaro Cierre Suave Exterior C Blanco",
    Costo: 350,
    Factor: 1.5,
    PrecioVenta: 350
  },
  {
    Codigo: "ANT.EX.C.BM.550.GRS",
    Nombre: "Antaro Cierre Suave Exterior C Gris",
    Costo: 420,
    Factor: 1,
    PrecioVenta: 450
  },
  {
    Codigo: "ANT.EX.C.BM.400.BCO",
    Nombre: "Antaro Cierre Suave Exterior C Blanco",
    Costo: 350,
    Factor: 1.5,
    PrecioVenta: 350
  },
  {
    Codigo: "ANT.EX.C.BM.550.GRS",
    Nombre: "Antaro Cierre Suave Exterior C Gris",
    Costo: 420,
    Factor: 1,
    PrecioVenta: 450
  },
  {
    Codigo: "ANT.EX.C.BM.400.BCO",
    Nombre: "Antaro Cierre Suave Exterior C Blanco",
    Costo: 350,
    Factor: 1.5,
    PrecioVenta: 350
  },
  {
    Codigo: "ANT.EX.C.BM.550.GRS",
    Nombre: "Antaro Cierre Suave Exterior C Gris",
    Costo: 420,
    Factor: 1,
    PrecioVenta: 450
  }
];

class BisagrasIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout className="layout">
          <Navbar />
          <Content style={{ padding: "0 200px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Categorias</Breadcrumb.Item>
              <Breadcrumb.Item>Bisagras</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Title style={{ textAlign: "center" }}>Bisagras</Title>
              <Table columns={columns} dataSource={data} size="middle" />
            </div>
          </Content>
          <BlankFooter />
        </Layout>
      </React.Fragment>
    );
  }
}

export default BisagrasIndex;

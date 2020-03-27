import React, { Component, useState } from "react";
import AddForm from "./AddForm";
import Navbar from "../Navbar/Navbar";
import BlankFooter from "../Navbar/BlankFooter";
import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Form,
  Input,
  Button,
  Radio
} from "antd";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

class AddBisagra extends Component {
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
              <Title style={{ textAlign: "center" }}>Agregar Bisagra</Title>
              <div>
                <AddForm />
              </div>
            </div>
          </Content>
          <BlankFooter />
        </Layout>
      </React.Fragment>
    );
  }
}

export default AddBisagra;

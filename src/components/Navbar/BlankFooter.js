import React, { Component } from "react";
import { Layout, Typography } from "antd";
const { Footer } = Layout;
const { Text } = Typography;

class BlankFooter extends Component {
  render() {
    return (
      <Footer
        style={{
          position: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
      >
        <Text>
          {" "}
          <a style={{ textAlign: "left" }} href="" target="_blank">
            ABITALIA | Sistema de Cotizaciones V1.0.0
          </a>
          <div
            style={{ textAlign: "right" }}
            className="copyright"
            id="copyright"
          >
            © {new Date().getFullYear()}, Developed by{" "}
            <a href="http://www.allsoft.mx/" target="_blank">
              Allsoft
            </a>
          </div>
        </Text>
      </Footer>
    );
  }
}

export default BlankFooter;

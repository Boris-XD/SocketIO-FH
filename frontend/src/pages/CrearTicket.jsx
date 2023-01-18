import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import useHideMenu from "../hooks/useHideMenu";

const { Text, Title } = Typography;

const CrearTicket = () => {

  const nuevoTicket = () => {console.log("Crear ticket")}
  useHideMenu(true);
  return (
   
   <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el botón para crear un nuevo ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2} style={{ fontSize: 20}}>Su número </Text>
          <br/>
          <Text type="success" style={{ fontSize: 55}}>55</Text>
        </Col>
      </Row>
    </>
  );
};

export default CrearTicket;

import React from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import useHideMenu from "../hooks/useHideMenu";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsuarioStage } from "../helpers/getUsuarioStorage";

const { Text, Title } = Typography;

const Escritorio = () => {
  const { agente, escritorio } = getUsuarioStage(); 
  const navigate = useNavigate();
  const salir = () => { 
    localStorage.clear();
    navigate('/ingresar');
  };
  const siguienteTicket = () => {};
  useHideMenu(false);

  if (!agente || !escritorio) {
    return <Navigate to="/ingresar" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agente}</Title>
          <Text>Usted esta trabajando en el escritorio:  </Text>
          <Text type="success">{escritorio}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="primary" danger onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket nùmero: </Text>
          <Text style={{ fontSize: 30 }} type="danger">55</Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket} shape="round" type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;

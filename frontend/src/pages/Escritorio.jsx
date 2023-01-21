import { useContext } from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import useHideMenu from "../hooks/useHideMenu";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsuarioStage } from "../helpers/getUsuarioStorage";
import { SocketContext } from "../context/SocketContext";
import { useState } from "react";

const { Text, Title } = Typography;

const Escritorio = () => {
  const { agente, escritorio } = getUsuarioStage();
  const { socket } = useContext(SocketContext);
  const [currentTicket, setCurrentTicket] = useState(null);
  const navigate = useNavigate();
  const salir = () => {
    localStorage.clear();
    navigate("/ingresar");
  };
  const siguienteTicket = () => {
    socket.emit("siguiente-ticket", { agente, escritorio }, (ticket) => {
      console.log("ejecutando ticket", ticket);
      setCurrentTicket(ticket);
    });
  };
  useHideMenu(false);

  if (!agente || !escritorio) {
    return <Navigate to="/ingresar" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agente}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
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
      {currentTicket && (
        <Row>
          <Col>
            <Text>Esta atendiendo el ticket nùmero: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {currentTicket.numero}
            </Text>
          </Col>
        </Row>
      )}
      {!currentTicket && (
        <Row>
          <Col>
            <Text>No hay tickets disponibles</Text>
          </Col>
        </Row>
      )}
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

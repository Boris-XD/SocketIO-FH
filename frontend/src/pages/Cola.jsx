import React from "react";
import { Row, Typography, Col, Card, List, Tag, Divider } from "antd";
import useHideMenu from "../hooks/useHideMenu";

const { Text, Title } = Typography;

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: "Carlos Castro",
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Carlos Castro",
  },
];

const Cola = () => {
  useHideMenu(true);
  return (
    <>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">{item.escritorio}</Tag>,
                  ]}
                >
                  <Title>Nro {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
              <List.Item.Meta
                title={`Ticket No. ${ item.ticketNo}`}
                description={
                    <>
                      <Text type="secondary">En el escritorio:  </Text>,
                      <Tag color="magenta">{item.ticketNo}</Tag>,
                      <Text type="secondary">Agente: </Text>,
                      <Tag color="volcano">{item.agente}</Tag>,
                    </>
                }
                />
                </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};

export default Cola;

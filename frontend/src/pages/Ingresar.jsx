import { Button, Form, Input, InputNumber, Typography } from "antd";
import { Navigate, useNavigate } from 'react-router-dom';
import { SaveOutlined } from "@ant-design/icons";
import useHideMenu from "../hooks/useHideMenu";
import { getUsuarioStage } from "../helpers/getUsuarioStorage";


const { Text, Title } = Typography;

const Ingresar = () => {
  
  const navigate = useNavigate();
  useHideMenu(false);

  const { agente, escritorio } = getUsuarioStage();

  const onFinish = ({ agente, escritorio }) => {
    localStorage.setItem('agente', agente);
    localStorage.setItem('escritorio', escritorio);
    navigate('/escritorio');
  };

  const onFinishFailed = (errorInfo) => {};

  if (agente && escritorio) {
    return <Navigate to="/escritorio" />;
  }
  return (
    
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Ingresa el nombre del agente",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Ingresa el numero de mesa",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Ingresar;

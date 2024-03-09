import React from "react";
import Buguer from "../../assets/logoBurguer.png";
import { Link } from "react-router-dom"
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  return (
    <Container>
      <ContainerItens>
        <Image src={Buguer} />

        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1-X Salada"/>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Nome"/>

        <Button to="/pedidos">Novo Pedido</Button>

      </ContainerItens>
    </Container>
  );
}

export default App;

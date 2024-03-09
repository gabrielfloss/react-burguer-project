import React from "react";
import Pacote from "../../assets/pacote.png";
import Trash from "../../assets/trash.svg"
import { Container, ContainerItens, Image, H1, Button, Div } from "./styles";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <ContainerItens>
        <Image src={Pacote} />

        <H1>Pedidos</H1>

        <Div>
          <a target="_blank" href="https://github.com/gabrielfloss">
            Github @gabrielfloss
          </a>
          <img src={Trash} alt=""/>
        </Div>

        <Div>
          <a target="_blank" href="https://www.instagram.com/gabrielflxs">
            Instagram @gabrielflxs
          </a>
          <img src={Trash} alt="" />
        </Div>

        <p>olá tudo bom? se achou isso posto no meu github :)</p>

        <Button to="/">Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;

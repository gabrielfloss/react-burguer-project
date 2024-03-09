import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #0a0a10;

  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`;

export const Image = styled.img`
  width: 342px;
  height: 354px;
  margin-top: 30px;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 98px;
`;




export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;


  width: 342px;
  height: 68px;
  padding: 0px, 113px, 0px, 113px;

  background: #FFFFFF24;

  margin-bottom: 51px ;
  margin-top: 71px;


font-size: 17px;
font-weight: 900;
line-height: 3px;
letter-spacing: 0px;
text-align: center;
color: #ffffff;

border: none;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 1;
}
;
`;

export const Div = styled.div`
 width: 342px;
height: 101px;
border-radius: 14px;
background: #FFFFFF40;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;

margin: 20px 20px 70px 20px;

img{
  cursor: pointer;
  
}





`
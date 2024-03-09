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

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;

  color: #eeeeee;

  margin-right: 210px;


  

`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 19px, 139px, 18px, 15px;
  border-radius: 14px;

  border: none;
  outline: none;

  background: #ffffff40;
  padding-left: 20px;
  margin-bottom: 40px ;

font-size: 22px;
font-weight: 300;
color: #FFFFFF;


`;

export const Button = styled(Link)`
  width: 342px;
  height: 68px;
  padding: 0px, 113px, 0px, 113px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #D93856;

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

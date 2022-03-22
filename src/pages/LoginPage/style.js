import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-weight: bold;
`;
const Main = styled.div`
  width: 65%;
  height: 100%;
  background-color: #151515;
  box-shadow: 4px 0px 4px 0px #00000040;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
`;

const Form = styled.div`
  min-height: 100vh;
  width: 35%;
  position: fixed;
  right: 0;

  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  text-decoration-line: underline;
  color: #ffffff;
`;

const Title = styled.p`
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;

  color: #ffffff;
`;

const Description = styled.div`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 44px;

  max-width: 442px;
  width: 80%;

  color: #ffffff;
`;

const Button = styled.button`
    width: 80%;
    height: 65px;
    background: #1877F2;
    color: #FFFFFF;
    border-radius: 6px;
    cursor: pointer;
  
    font-size: 20px;
    font-weight: bold;
    font-family: 'Oswald';
    border: none;
`;

export { Container, StyledLink, Form, Main, Description, Title, Button };

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-weight: bold;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Main = styled.main`
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

  @media (max-width: 600px) {
    width: 100%;
    height: 25%;
    z-index: 5;
    align-items: center;
    padding-left: 0px;
    padding-bottom: 30px;
  }
`;

const Form = styled.form`
  min-height: 100vh;
  width: 35%;
  position: fixed;
  right: 0;

  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: flex-start;
    padding-top: 45%;
    width: 100%;
    height: 75%;
    z-index: 3;
  }
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

  @media (max-width: 600px) {
    padding-top: 5%;
  }
`;

const Title = styled.p`
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;

  color: #ffffff;

  @media (max-width: 600px) {
    margin-top: 20px;
    font-size: 85px;
    line-height: 67px;
  }
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


  @media (max-width: 600px) {
    font-size: 23px;
    text-align: center;
    width: unset;
    max-width: 240px;
  }
`;


export { Container, StyledLink, Form, Main, Description, Title };

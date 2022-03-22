import styled from "styled-components";

const Input = styled.input`
    width: 80%;
    height: 65px;
    background: #FFFFFF;
    color: #111;
    border: none;
    border-radius: 6px;
    margin-bottom: 13px;
    padding-left: 12px;
    
    font-size: 20px;
    font-weight: bold;
    font-family: 'Oswald';

  &::placeholder {
    color: #9f9f9f;
    font-family: "Oswald";
  }

  &:disabled {
    background: #f2f2f2;
  }
`;

export default Input;

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 100vh;

    background-color: #333333;
    padding-top: 125px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;

    //position: absolute;

    @media (max-width: 610px) {
        padding-top: 91px;
    }
`;

export const Main = styled.div`
    max-width: 100%;

    padding-bottom: 50px;
    gap: 25px;
    
    display: flex;
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;

    background: #FFFFFF;

    border-radius: 8px;
    border: none;

    padding-left: 17px;

    outline: none;

    &::placeholder {
        font-family: 'Lato';
        font-size: 19px;
        line-height: 23px;

        color: #C6C6C6;
    }
`;

export const InputBox = styled.div`
    width: 100%;

    padding: 15px;
    position: relative;

    @media (min-width: 650px) {
        display: none;
    }
`;

export const BoxIconInput = styled.div`
font-family: 'Lato';
font-size: 19px;
line-height: 23px;

color: #C6C6C6;

position: absolute;
right: 25px;
top: 28px;
`;



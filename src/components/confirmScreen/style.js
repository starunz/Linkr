import styled from "styled-components";


export const Container = styled.div`
    width: 597px;
    max-width: 100%;
    height: 262px;

    background: #333333;
    border-radius: 50px;
    margin: auto;
    gap:40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
`;

export const OpacityBackground = styled.div`
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.9);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
`;  

export const Text = styled.span`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;

    color: #FFFFFF;

    @media (max-width: 350px) {
        font-size: 22px;
        line-height: 38px;
    }
`;

export const Buttons = styled.div`
    gap: 63px;
    display: flex;

    @media (max-width: 610px) {
        gap: 10px;
    }
`;

export const ButtonAccept = styled.button`
    width: 134px;
    height: 37px;

    background: #1877F2;
    border-radius: 5px;
    ${props => props.disabled && 'opacity: 0.5;'}

    cursor: pointer;
`;

export const ButtonRecuse = styled.button`
    width: 134px;
    height: 37px;

    background: #FFFFFF;
    border-radius: 5px;
    ${props => props.disabled && 'opacity: 0.5;'}

    cursor: pointer;
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 72px;

    background-color: #151515;
    padding: 0px 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const Logo = styled.span`
    color: #FFFFFF;

    font-family: 'Passion One';
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
`;

export const Input = styled.input`
    width: 40vw;
    height: 45px;

    background: #FFFFFF;
    border-radius: 8px;
    border: none;

    &::placeholder {
        font-family: 'Lato';
        font-size: 19px;
        line-height: 23px;

        color: #C6C6C6;
    }
`;

export const ImageUser = styled.div`
    width: 53px;
    height: 53px;

    background-color: red;
    border-radius: 50%;
`;
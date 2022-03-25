import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;

    background-color: #333333;
    padding-top: 125px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 610px) {
        padding-top: 91px;
    }
`;

export const Main = styled.div`
    max-width: 100%;
`;

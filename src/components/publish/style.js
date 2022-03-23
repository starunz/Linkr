import styled from "styled-components";

export const Container = styled.div`
    width: 611px;
    height: 209px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 16px 18px;
    gap: 18px;

    display: flex;
`;

export const Image = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    background-color: red;
`;

export const Form = styled.form`
    width: 100%;
    gap: 12px;
    
    display: flex;
    flex-direction: column;

    span {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;

        color: #707070;
    }

    input {
        width: 100%;
        height: 30px;

        background: #EFEFEF;
        border-radius: 5px;
    }

    textarea {
        width: 100%;
        height: 66px;

        background: #EFEFEF;
        border-radius: 5px;
    }
`;

export const Button = styled.button`
    width: 112px;
    height: 31px;

    align-self: flex-end;

    background: #1877F2;
    border-radius: 5px;
`;
import styled from "styled-components";

import { Link } from 'react-router-dom';

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

export const Image = styled(Link)`
    width: 50px;
    height: 50px;

    border-radius: 50%;

    object-fit: cover;
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

        &::placeholder {
            padding-left: 13px;
            
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;

            color: #949494;
        }
    }

    textarea {
        width: 100%;
        height: 66px;

        background: #EFEFEF;
        border-radius: 5px;
        border: none;

        &::placeholder {
            padding-left: 13px;

            font-family: 'Lato';
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;

            color: #949494;
        }
    }
`;

export const Button = styled.button`
    width: 112px;
    height: 31px;

    align-self: flex-end;

    background: #1877F2;
    border-radius: 5px;
    color: #FFFFFF;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
`;
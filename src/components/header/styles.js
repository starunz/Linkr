import styled from 'styled-components';

import { IoChevronDownSharp } from "react-icons/io5";

import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 72px;

    background-color: #151515;
    padding: 0px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Logo = styled(Link)`
    color: #FFFFFF;

    font-family: 'Passion One';
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;

    :hover {
        color: #1877f2;
        cursor: pointer;
    }

    @media (max-width: 635px){
        font-size: 45px;
        line-height: 50px;
    }
`;



const Input = styled.input`
    width: 40vw;
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

const InputBox = styled.div`
    width: 563px;
    max-width: 60vw;
    
    position: relative;

    @media (max-width: 650px) {
        display: none;
    }
`;

const ImageUser = styled.img`
    width: 53px;
    height: 53px;

    border-radius: 50%;

    object-fit: cover;
`;

const BoxIconInput = styled.div`
    font-family: 'Lato';
    font-size: 19px;
    line-height: 23px;

    color: #C6C6C6;

    position: absolute;
    right: 10px;
    top: 12px;
`;

const ChevronIcon = styled(IoChevronDownSharp )`
    position: absolute;

    right: 85px;
    top: 25px;

    transform: ${({ transfrom }) => transfrom};

    color: white;

    :hover {
        cursor: pointer;
        color: #1877f2;
    }
`

const QuickAccess= styled.div`
    width: 135px;
    height: 47px;

    background-color: #171717;

    border-bottom-left-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;

    top: 72px;
    right: 0;

    display: ${({ display }) => display};

    span,
    a {
        font-size: 17px;
        color: #ffffff;
        font-weight: bold;
        margin-top: 12px;
        font-family: "Lato", sans-serif;
    }

    span:hover,
    a:hover {
        cursor: pointer;
        color: #1877f2;
    }
`

export {
    Container,
    Logo,
    Input,
    ImageUser,
    ChevronIcon,
    QuickAccess,
    InputBox,
    BoxIconInput,
}
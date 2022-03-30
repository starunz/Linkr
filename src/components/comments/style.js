import styled from "styled-components";

import { IoPaperPlaneOutline } from "react-icons/io5";

const CommentsContainer = styled.div`
    display: ${({commentState}) => commentState ? "flex" : "none"};

    flex-direction: column;
    width: 611px;
    margin: 0 auto;

    position: relative;
    top: -35px;

    border-radius: 16px;

    background-color: #1E1E1E;
;
    @media (max-width: 635px) {
        width: 100%;
    }
`;

const BoxScroller = styled.div`
    max-height: 200px;   
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #1E1E1E; 
    }    
    &:hover {
        ::-webkit-scrollbar-thumb {
            background: #575757; 
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #1877f2; 
        }
    }
    
    @media (max-width: 635px) {
        width: 100%;
    }
`;

const Comment = styled.div`
    border-bottom: 1px solid #353535;

    display: flex;
    align-items: center;

    font-size: 14px;

    font-family: 'Lato', sans-serif;
    line-height: 17px;
    padding: 15px 0 15px 0;

    img {
        width: 39px;
        height: 39px;
        border-radius: 50%;
    }
    h4 {
        color: #F3F3F3;
        font-weight: bold;
        max-width: 510px;
        word-break: break-word;
        cursor: pointer;
    }
    span {
        color: #565656;

    }
    p {
        color: #ACACAC;
        max-width: 510px;
        word-break: break-word;


    }
    div {
        margin-left: 15px;
        @media (max-width: 635px) {
            width: 100%;
        }
    }

    @media (max-width: 635px) {
        width: 100%;
    }
`;

const WriteComment = styled.form`
    height: 83px;
    width: 600px;

    position: relative;
    display: flex;
    align-items: center;

    input {
        width: 600px;
        padding: 0 40px 0 11px;
        height: 39px;
        background-color: #252525;
        border-radius: 8px;
        color: #ACACAC;

        @media (max-width: 635px) {
        width: 100%;
        }
    }

    input::placeholder {
        color: #575757;
        padding-left: 10px;
    }

    input:focus {
        outline: 0;
    }

    img {
        width: 39px;
        height: 39px;
        border-radius: 50%;
        margin-right: 18px;
    }
    @media (max-width: 635px) {
        width: 95%;
    }
`;

const ButtonSendComment = styled.button`
    background-color: Transparent;

    position: absolute;
    top: 32px;
    right: 5px;
`;

const IconSendComment = styled(IoPaperPlaneOutline)`
    color: #F3F3F3;

    width: 18px;
    height: 18px;

    &:hover {
    cursor: pointer;
    color: #1877f2;
  }   
`;

export {
    CommentsContainer,
    BoxScroller,
    Comment,
    WriteComment,
    ButtonSendComment,
    IconSendComment
}
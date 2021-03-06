import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    height: 45px;

    position: relative;
`;

export const SearchLink = styled.a`
    width: 100%;
    height: 65.5px;
    padding-left: 17px;
    display: flex;
    background: #E7E7E7;
    align-items: center;
    gap: 12px;
    border-radius: ${(props) => props.isLast ?
        "0 0 8px 8px;" : " "};

    img {
        border-radius: 304px;
        width: 39px;
        height: 39px;
    }

    span {
        height: 23px;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 19px;
        color: #515151;
    }

    strong {
        width: 140px;
        height: 18px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #C5C5C5 !important;
    }

    &:hover
    {
        background-color: #171717;

        span {
            color: #FFFFFF;
        }
    }
`;

export const SearchBox = styled.div`
    position: absolute;
    width: 100%;
    padding-top: 8px;
    left: 0px;
    top: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 45px;

    background: #FFFFFF;

    border-radius: 8px;
    border: 0;

    outline: 0;

    position: absolute;
    bottom: 0px;
    left: 0px;
    
    padding: 12px;

    &::placeholder {
        font-family: 'Lato';
        font-size: 19px;
        line-height: 23px;
        color: #C6C6C6;
        
    }
`;

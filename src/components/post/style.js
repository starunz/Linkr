import styled from "styled-components";

export const Container = styled.div`
    width: 611px;
    max-width: 100%;

    background: #171717;
    border-radius: 16px;
    padding: 17px 18px 20px 18px;
    gap: 18px;

    display: flex;

    @media (max-width: 610px) {
        border-radius: 0px;
        gap: 14px;
    }
`;

export const ImageLikeContainer = styled.div`
    align-items: center;
    
    display: flex;
    flex-direction: column;
`;

export const ImageUser = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;

    @media (max-width: 610px) {
        width: 40px;
        height: 40px;
    }
`;

export const Main = styled.div`
    margin: auto;
    gap: 8px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    height: 23px;

    font-family: 'Lato';
    font-size: 19px;
    line-height: 23px;

    color: #FFFFFF;

    @media (max-width: 610px) {
        font-size: 17px;
        line-height: 20px;
    }
`;

export const Text = styled.span`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #B7B7B7;

    @media (max-width: 610px) {
        font-size: 15px;
        line-height: 18px;
    }
`;

export const LinkContainer = styled.a`
    width: 100%;
    max-width: 100%;

    border: 1px solid #4D4D4D;
    box-sizing: border-box;
    border-radius: 11px;

    display: flex;
`;

export const ImageLink = styled.img`
    width: 155px;

    border-radius: 0px 12px 13px 0px;

    @media (max-width: 610px) {
        width: 95px;
    }
`;

export const NotImage = styled.div`
    min-width: 155px;
    min-height: 100%;

    border-radius: 0px 12px 13px 0px;
    gap: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-family: 'Lato';
        font-size: 16px;
        line-height: 19px;
        word-break: break-all;

        color: #CECECE;
    }

    @media (max-width: 610px) {
        min-width: 95px;
    }
`;

export const MainLink = styled.div`
    padding: 24px 19.31px 23px 19.31px;
    gap: 5px;

    display: flex;
    flex-direction: column;

    @media (max-width: 610px) {
        padding: 7px 11px 8px 11px;
    }
`;

export const TitleLink = styled.span`
    font-family: 'Lato';
    font-size: 16px;
    line-height: 19px;
    word-break: break-all;

    color: #CECECE;

    @media (max-width: 610px) {
        font-size: 11px;
        line-height: 13px;
    }
`;

export const TextLink = styled.span`
    font-family: 'Lato';
    font-size: 11px;
    line-height: 13px;
    word-break: break-all;

    color: #CECECE;

    @media (max-width: 610px) {
        font-size: 9px;
        line-height: 11px;   
    }
`;

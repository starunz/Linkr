import styled from "styled-components";

export const Container = styled.div`
    width: 611px;

    background: #171717;
    border-radius: 16px;
    padding: 17px 18px 20px 18px;
    gap: 18px;

    display: flex;
`;

export const ImageLikeContainer = styled.div`
    align-items: center;
    
    display: flex;
    flex-direction: column;
`;

export const ImageUser = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 26.5px;
`;

export const Main = styled.div`
    gap: 8px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    width: 502px;
    height: 23px;

    font-family: 'Lato';
    font-size: 19px;
    line-height: 23px;

    color: #FFFFFF;
`;

export const Text = styled.span`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #B7B7B7;
`;

export const LinkContainer = styled.a`
    width: 503px;

    border: 1px solid #4D4D4D;
    box-sizing: border-box;
    border-radius: 11px;

    display: flex;
`;

export const ImageLink = styled.img`
    width: 200px;
    height: 100%;

    border-radius: 0px 12px 13px 0px;
`;

export const MainLink = styled.div`
    padding: 24px 19.31px 23px 19.31px;
    gap: 5px;

    display: flex;
    flex-direction: column;
`;

export const TitleLink = styled.span`
    font-family: 'Lato';
    font-size: 16px;
    line-height: 19px;
    word-break: break-all;

    color: #CECECE;
`;

export const TextLink = styled.span`
    font-family: 'Lato';
    font-size: 11px;
    line-height: 13px;
    word-break: break-all;

    color: #CECECE;
`;

export const Hashtag = styled.span`
  color: white;
  font-size: 22px;
  font-weight: bold
`;
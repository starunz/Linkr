import styled from 'styled-components';

export const TrendingBox = styled.div`
    width: 100%;
    height: 406px;
    background: #171717;

    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: sticky;
    top: 100px;

    word-break: break-all;

    padding: 9px 2px 30px 0px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const TrendingContainer = styled.div`
    width: 301px;
    padding-left: 25px;
    display: flex;
`;

export const TrendingTitle = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;

    width: 95px;
    height: 40px;

    color: #FFFFFF;

    //margin-top: 9px;
    //margin-left: 16px;

    margin: 9px 0px 0px 16px;
`;

export const TrendingSeparator = styled.hr`
    width: 100%;

    border: 1px solid #484848;

    margin-top: 12px;
    margin-bottom: 22px;
`;

export const TrendingList = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 19px;

    margin-left: 16px;
    gap: 15px;

    li {
        margin-left: auto;
    }
`;
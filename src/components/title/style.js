import styled from "styled-components";

export const Container = styled.div`
    width: 940px;
    max-width: 100%;
    padding: 0 0 43px 17px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;

    position: relative;

    left: calc((100px - 130px) / 2);

    @media (max-width: 610px) {
        padding-bottom: 19px;

        left: 0px;
    }
`;
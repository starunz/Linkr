import styled from "styled-components";

const UserContainer = styled.div`
    display: flex;    
    justify-content: center;

    width: 934px;
    max-width: 100%;
    height: 130px;
    
    padding: 18px;
    gap: 14px;

    @media (max-width: 800px) {
        width: 611px;
        height: 100px;

        gap: 18px;


        div {
            font-size: 35px;

            display: flex;
        }
    }
    
    @media (max-width: 610px) {
        width: 611px;
        height: 100px;

        gap: 0;

        justify-content: center;

        div {
            font-size: 28px;

            display: flex;
            align-items: center;
        }
    }
`

export {
    UserContainer
}
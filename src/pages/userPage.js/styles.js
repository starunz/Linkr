import styled from "styled-components";

const UserContainer = styled.div`
    display: flex;    
    justify-content: center;

    width: 930px;
    max-width: 100%;
    height: 130px;
    
    padding: 20px;

    @media (max-width: 610px) {
        width: 611px;
        height: 100px;

        justify-content: center;

        div {
            font-size: 30px;

            display: flex;
            align-items: center;
        }
    }
`

export {
    UserContainer
}
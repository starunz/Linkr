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
`;

const Follow = styled.button`
    width: 112px;
    height: 31px;

    background: #1877F2;
    border-radius: 5px;
    color: #FFFFFF;
    ${(props) => props.disabled && "opacity: 0.5;"}

    font-family: 'Lato';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Unfollow = styled.button`
    width: 112px;
    height: 31px;

    background: #FFFFFF;
    border-radius: 5px;
    color: #1877F2;
    ${(props) => props.disabled && "opacity: 0.5;"}

    font-family: 'Lato';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export {
    UserContainer,
    Follow,
    Unfollow,
}
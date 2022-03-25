import styled from "styled-components";

export const Container = styled.div`
    width: 611px;
    max-width: 100%;
    height: 209px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 16px 18px;
    gap: 18px;

    display: flex;

    @media (max-width: 610px) {
        border-radius: 0px;
        gap: 14px;
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;

<<<<<<< HEAD
    @media (max-width: 610px) {
        display: none;
    }
=======
    object-fit: cover;
>>>>>>> 025245199eda23f9e74aa165574bd50d85f1df68
`;

export const Form = styled.form`
    width: 100%;
    gap: 12px;
    
    display: flex;
    flex-direction: column;

    span {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;

        color: #707070;

        @media (max-width: 610px) {
            font-size: 17px;
            line-height: 20px;
            text-align: center;
        }
    }

    input {
        width: 100%;
        height: 30px;

        background: #EFEFEF;
        border-radius: 5px;

        &::placeholder {
            padding-left: 13px;
            
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;

            color: #949494;

            @media (max-width: 610px) {
                    font-size: 13px;
                    line-height: 16px;
            }
        }


    }

    textarea {
        width: 100%;
        height: 66px;

        background: #EFEFEF;
        border-radius: 5px;
        border: none;

        &::placeholder {
            padding-left: 13px;

            font-family: 'Lato';
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;

            color: #949494;

            @media (max-width: 610px) {
                    font-size: 13px;
                    line-height: 16px;
            }
        }
    }
`;

export const Button = styled.button`
    width: 112px;
    height: 31px;

    align-self: flex-end;

    background: #1877F2;
    border-radius: 5px;
    color: #FFFFFF;
    ${props => props.disabled && 'opacity: 0.5;'}

    font-family: 'Lato';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    @media (max-width: 610px) {
        height: 22px;
        font-size: 13px;
        line-height: 16px;
    }

    &:hover {
        cursor: pointer;
    }
`;
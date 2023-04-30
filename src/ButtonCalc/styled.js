import styled from "styled-components";
export const Wrapper = styled.div`
    width: 77%;
    order: 1;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: 1px solid #4c4c4c;
    border-radius: 10px;
    transition: transform 0.1s ease-in-out;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: scale(0.95);
    }

`;
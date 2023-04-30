import styled from "styled-components";

export const MainContent = styled.main`
    display:flex;
    flex-wrap: wrap;
    margin: 0 auto;
    background-color: #323232;
    border: 1px solid #4c4c4c;
    border-radius: 10px;
    width: fit-content;
    padding: 15px;
    flex-grow: 1;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        
    }
`;
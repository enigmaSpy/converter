import styled from "styled-components";

export const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;
  text-align: center;
`;

export const ErrorMessageHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: red;
`;

export const ErrorMessageSubheading = styled.h3`
  font-size: 2rem;
  color: #f55;
`;

export const ErrorMessageText = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;
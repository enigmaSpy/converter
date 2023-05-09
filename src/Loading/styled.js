import styled from "styled-components";

export const LoadingElement = styled.div`

width: 60px;
height: 60px;
font-size: 6rem;
color:white;
animation: rotation 8s infinite;
position: absolute;
top:40%;
left: 50%;
transform-origin: center;
transform: translate(-50%,-50%);
  
@keyframes rotation {
    0%{
        transform: rotate(0deg) translate(-50%,-50%);
    }
    100%{
        transform: rotate(360deg) translate(-50%,-50%);
    }
}
`;
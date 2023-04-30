import styled from "styled-components";

export const TablePrice = styled.table`
    margin: 0 auto;
    width: 100%;
    flex: 1;
    color: antiquewhite;
    background-color: rgb(31, 31, 31);
    border: 1px solid rgba(204, 204, 204, 0.294);
    border-radius: 0 10px 10px 0;
    padding: 10px;
    @media (max-width: 768px) {

        border-radius: 10px;
        order: -1;
        display: flex;
       flex-direction: row;
       margin-bottom: 10px;
       padding: 2px;
    }
`;

export const TableHead = styled.thead`
    background-color: #333333;
@media (max-width: 768px) {
    background-color: transparent;
     display: flex;
}`;

export const TableBody = styled.tbody`
@media (max-width: 768px) {
        display: flex;
        flex-direction: row;
};
`;

export const TableTr = styled.tr`
text-align: end;

@media (max-width: 768px) {
    padding: 2px;
}
`;


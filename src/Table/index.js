import { TablePrice, TableBody, TableHead,TableTr } from "./styled";

const Table=({ratesData})=>(
    
    <TablePrice >
        <TableHead >
        
            <TableTr >
                <th >{ratesData.rates['PLN'].toFixed(2)}</th>
                <th >PLN</th>
            </TableTr>
          </TableHead>
          <TableBody >
            <TableTr  >
                <td >{ratesData.rates['USD'].toFixed(2)}</td>
                <td >USD</td>
            </TableTr>
            <TableTr >
                <td >{ratesData.rates['EUR'].toFixed(2)}</td>
                <td >EUR</td>
            </TableTr>
            <TableTr >
                <td >{(ratesData.rates['JPY']).toFixed(2)}</td>
                <td >JPY</td>
            </TableTr>
          </TableBody>
      </TablePrice>
);

export default Table;
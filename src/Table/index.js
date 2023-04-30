import { TablePrice, TableBody, TableHead,TableTr } from "./styled";

const Table=()=>(
    <TablePrice >
        <TableHead >
            <TableTr >
                <th >1</th>
                <th >PLN</th>
            </TableTr>
          </TableHead>
          <TableBody >
            <TableTr  >
                <td >0,23</td>
                <td >USD</td>
            </TableTr>
            <TableTr >
                <td >0,21</td>
                <td >EUR</td>
            </TableTr>
            <TableTr >
                <td >31,26</td>
                <td >JPY</td>
            </TableTr>
          </TableBody>
      </TablePrice>
);

export default Table;
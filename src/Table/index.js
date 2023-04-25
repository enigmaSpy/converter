import './style.css'
const Table=()=>(
    <table className="priceTable">
        <thead className="priceTable__thead">
            <tr className="priceTable__tr">
                <th className="priceTable__th">1</th>
                <th className="priceTable__th priceTable__td--currency">PLN</th>
            </tr>
          </thead>
          <tbody className="priceTable__tbody">
            <tr  className="priceTable__tr ">
                <td className="priceTable__td">0,23</td>
                <td className="priceTable__td priceTable__td--currency">USD</td>
            </tr>
            <tr className="priceTable__tr">
                <td className="priceTable__td">0,21</td>
                <td className="priceTable__td priceTable__td--currency">EUR</td>
            </tr>
            <tr className="priceTable__tr">
                <td className="priceTable__td">31,26</td>
                <td className="priceTable__td priceTable__td--currency">JPY</td>
            </tr>
          </tbody>
      </table>
);

export default Table;
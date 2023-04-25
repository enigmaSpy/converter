import Header from "./Header";

function App() {
  return (
   <>
    <Header/>
    <main className="container">

      <form action="#" className="form">
        <div className="form__wrapper">
          
          <fieldset className="form__feildset">
            <label className="form__item">
              <span className="form__itemText">Mam:</span>
              <input type="number" name="own" className="form__input form__input--valueBefore" min="0"  required />
            </label>
            <select aria-label="Wybierz swoją walute" name="currencyOwn" className="form__select form__select--currency">
              <option value="pln" selected>PLN</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="jpy">JPY</option>
            </select>
          </fieldset>

              <button className="form__reverseButton">💱</button>

          <fieldset className="form__feildset">
            <label className="form__item">
              <span className="form__itemText"> Otrzymam: </span>
              <input type="number" name="offert" className="form__input form__input--valueAfter" value="0.00" disabled/>
            </label>
            <select aria-label="Wybierz walute na którą chcesz" name="currencyOffert" className="form__select form__select--currencyWanted" >
              <option value="pln">PLN</option>
              <option value="eur" selected>EUR</option>
              <option value="usd">USD</option>
              <option value="jpy">JPY</option>
            </select>
          </fieldset>

          <button type="submit" className="form__calculate">Przelicz</button>
        </div>
      </form>

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
    </main>
   </>
  );
}

export default App;

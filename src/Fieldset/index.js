import React, {useState} from 'react'

const Fieldset = () => {
    const [value,setValue] = useState("")
    return (
        <fieldset className="form__feildset">

            <label className="form__item">
                <span className="form__itemText">Mam:</span>
                <input type="number" name="own" value={value} onChange={({target})=>setValue(target.value) } className="form__input" min="0" required />
            </label>

            <select aria-label="Wybierz swoją walute" name="currencyOwn" className="form__select">
                <option value="pln" selected>PLN</option>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="jpy">JPY</option>
            </select>

        </fieldset>
    );
}
export default Fieldset;
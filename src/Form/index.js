import React, { useState } from 'react'
import './style.css'

const Form = () => {
    const [value, setValue] = useState("");
    const [convertedValue, setConvertedValue] = useState("0.00");
    const [currencyOwn, setOvnedCurrency] = useState("PLN")
    const [currencyWanted, setWantedCurrency] = useState("EUR")
    const currencyRate = {
        PLN: 1,
        USD: 0.23,
        EUR: 0.21,
        JPY: 31.26
    };
    const convertValue = () => {
        let result = 0;
        result = (value * currencyRate[currencyWanted] *currencyRate[currencyOwn])
        setConvertedValue(result.toFixed(2));
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        convertValue();
    }
    return (
        <form action="#" className="form" onSubmit={onFormSubmit}>

            <fieldset className="form__feildset">

                <label className="form__item">
                    <span className="form__itemText">Mam:</span>
                    <input type="number" name="own" value={value} onChange={({ target }) => setValue(target.value)} className="form__input" min="0" required />
                </label>

                <select
                    aria-label="Wybierz swoją walute"
                    value={currencyOwn}
                    onChange={({ target }) => setOvnedCurrency(target.value)}
                    name="currencyOwn"
                    className="form__select">
                    <option >PLN</option>
                    <option >EUR</option>
                    <option >USD</option>
                    <option >JPY</option>
                </select>

            </fieldset>
            <button className="form__reverseButton">💱</button>

            <fieldset className="form__feildset">
                <label className="form__item">
                    <span className="form__itemText"> Otrzymam: </span>
                    <input type="number" name="offert" value={convertedValue} className="form__input form__input--valueAfter" disabled />
                </label>
                <select
                    aria-label="Wybierz walute na którą chcesz"
                    value={currencyWanted}
                    onChange={({ target }) => setWantedCurrency(target.value)}
                    name="currencyOffert"
                    className="form__select">
                    <option >PLN</option>
                    <option >EUR</option>
                    <option >USD</option>
                    <option >JPY</option>
                </select>
            </fieldset>

            <button type="submit" className="form__calculate">Przelicz</button>

        </form>
    );
}
export default Form;
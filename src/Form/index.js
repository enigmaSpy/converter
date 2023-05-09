import { useState } from 'react';
import ButtonCalc from '../ButtonCalc';
import { FormContent, FieldSet, Input, Label, InputText, Select, Button } from './styled';

const Form = ({ ratesData }) => {

    const [value, setValue] = useState("");
    const [convertedValue, setConvertedValue] = useState("0.00");
    const [currencyOwn, setOvnedCurrency] = useState("PLN")
    const [currencyWanted, setWantedCurrency] = useState("EUR")
    const currencyRate = ratesData.rates;
    const convertValue = () => {
        let result = 0;
        result = (value * currencyRate[currencyWanted] / currencyRate[currencyOwn])
        setConvertedValue(result.toFixed(2));
    }
    const onCalculate = (e) => {
        e.preventDefault();
        convertValue();
    }

    const reverseData = (e) => {
        e.preventDefault();
        const tempValue = value;
        setValue(convertedValue);
        setConvertedValue(tempValue);
        const temp = currencyOwn;
        setOvnedCurrency(currencyWanted);
        setWantedCurrency(temp);

    }

    return (
        <>
            <ButtonCalc onClick={onCalculate} />
            <FormContent action="#"  >

                <FieldSet>

                    <Label className="form__item">
                        <InputText>Mam:</InputText>
                        <Input type="number" name="own" value={value} onChange={({ target }) => setValue(target.value)} min="0" step="0.01" required />
                    </Label>

                    <Select
                        aria-label="Wybierz swoją walute"
                        value={currencyOwn}
                        onChange={({ target }) => setOvnedCurrency(target.value)}
                        name="currencyOwn">

                        {
                            currencyRate && Object.keys(currencyRate).map(currency => (
                                <option key={currency}>{currency}</option>
                            ))
                        }

                    </Select>

                </FieldSet>
                <Button
                    onClick={reverseData}
                >
                    💱
                </Button>

                <FieldSet>
                    <Label>
                        <InputText> Otrzymam: </InputText>
                        <Input type="number" name="offert" value={convertedValue} disabled />
                    </Label>
                    <Select
                        aria-label="Wybierz walute na którą chcesz"
                        value={currencyWanted}
                        onChange={({ target }) => setWantedCurrency(target.value)}
                        name="currencyOffert">

                        {
                            currencyRate && Object.keys(currencyRate).map(currency => (
                                <option key={currency}>{currency}</option>
                            ))
                        }
                    </Select>
                </FieldSet>

            </FormContent>
        </>
    );
}
export default Form;
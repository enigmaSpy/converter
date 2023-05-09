import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });


    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get('https://api.exchangerate.host/latest?base=PLN');


                const { rates, date } = await response.data;
                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            } catch (error) {
                setRatesData(
                    {
                        ...ratesData,
                        state: "error",
                    }
                )
            }
        }
       
        setTimeout(fetchRates, 2000);
    },[]);

    return ratesData;
};

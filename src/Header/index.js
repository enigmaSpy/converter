import {useState, useEffect} from 'react';
import { HeaderContent, Title, DateParagraph } from './styled';

const Header = ({ratesData}) => {
    const [date, setDate]= useState(new Date().toLocaleString());
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date().toLocaleString())
        });

        return ()=> clearInterval(intervalId);
    },[date]);

    return (
        <HeaderContent>
            <Title>Kantor</Title>
            <DateParagraph>{date}</DateParagraph>
            <DateParagraph>Dane poprane z dniem: {ratesData.date}</DateParagraph>
        </HeaderContent>
    )
};
export default Header;
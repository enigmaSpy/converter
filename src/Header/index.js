import React,{useState, useEffect} from 'react';
import './style.css';

const Header = () => {
    const [date, setDate]= useState(new Date().toLocaleString());
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date().toLocaleString())
        });

        return ()=> clearInterval(intervalId);
    },[date]);

    return (
        <header>
            <h1 className="header__title">Kantor</h1>
            <p className='header__data'>{date}</p>
        </header>
    )
};
export default Header;
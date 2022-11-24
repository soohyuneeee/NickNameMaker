import React from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';
function Header() {
    let navigate = useNavigate()

    return (
        <header className="headera">
            <div className="icon"></div>
            <h1 onClick={() => {
                navigate('/')
            }}>NICKNAME GENERATOR</h1>
            
        </header>
    )
}
export default Header;
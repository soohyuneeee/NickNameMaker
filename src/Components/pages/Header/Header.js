import React from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';
function Header() {
    let navigate = useNavigate()

    return (
        <header className="headera">
            {/* <div className="icon"></div> */}
            <img src="https://em-content.zobj.net/source/microsoft-teams/337/zany-face_1f92a.png" style={{width: 80 }}></img>
            <p></p>
            <b><h1 onClick={() => {
                navigate('/')
            }}>NICKNAME GENERATOR</h1></b>

        </header>
    )
}
export default Header;
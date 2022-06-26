import React from 'react';
import Header from './Header.js';
import Maker from './Maker.js';
import './Home.css'
import { Link } from 'react-router-dom';
function Home(){
    return(
        <div className='duv'>
        <Header/>
        
        <Link to="/maker"><button className='b1'>NICKNAME MAKER</button></Link>
        </div>
    )
}
export default Home;
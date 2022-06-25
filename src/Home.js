import React from 'react';
import Header from './Header.js';
import Maker from './Maker.js';
import './Home.css'

function Home(){
    function next(){
        "/maker"//로 가야함
    }
    return(
        <div className='duv'>
        <Header/>
        <button className='b1' onClick={next}>NICKNAME MAKER</button>
        </div>
    )
}
export default Home;
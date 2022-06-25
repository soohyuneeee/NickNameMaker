import React from 'react';
import Header from './Header.js';
import Maker from './Maker.js';

function Home(){
    function next(){
        <Maker/>
    }
    return(
        <div className='duv'>
        <Header/>
        <button className='b1' onClick={next}>NICKNAME MAKER</button>
        </div>
    )
}
export default Home;
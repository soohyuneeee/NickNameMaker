import React from 'react';
import Header from './Header.js';
import Result from './Result.js';
import { Route, Link } from 'react-router-dom';

import './Maker.css'
function Maker() {
  function next2(){
    return <Link to ="/result"></Link>
  }
    return (
        <div className='back2'>
        <Header/>
        <div className='text1'>닉네임을 만들 이름을 입력해주세요</div>
        <input type="text"className='name'></input>
        <div className='text2'>자신이 사는 지역을 입력해주세요</div>
        <input type="text"className='locate'></input>
        <Link to="/result" className='create'>닉네임 생성하기</Link>
      </div>
    );
  }
  
  export default Maker;
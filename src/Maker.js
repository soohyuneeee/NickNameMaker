import React, { useState } from 'react';
import Header from './Header.js';
import Result from './Result.js';
import { Route, Link, useNavigate } from 'react-router-dom';

import './Maker.css'
function Maker() {
   
  let navigate = useNavigate();
    let [name,setname] = useState("");
    let [locate, setlocate] = useState("");
    return (
        <div className='back2'>
        <Header/>
        <div className='text1'>닉네임을 만들 이름을 입력해주세요</div>
        <input type="text" className='name' onChange={(event)=>{
          setname(event.target.value);
        }}></input>
        <div className='text2'>자신이 사는 지역을 입력해주세요</div>
        <input type="text"className='locate' onChange={(event)=>{
          setlocate(event.target.value);
        }}></input>
        <button className='create' onClick={()=>{
          navigate('/result', {state:{name:name, locate:locate}})
        }}>닉네임 생성하기</button>
      </div>
    );
  }
  export default Maker;
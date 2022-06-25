import React from 'react';
import Header from './Header.js';
import './Maker.css'
function Maker() {
  function next2(){
    '/result'//로 가야함
  }
    return (
        <div className='back2'>
        <Header/>
        <div className='text1'>닉네임을 만들 이름을 입력해주세요</div>
        <input type="text"className='name'></input>
        <div className='text2'>자신이 사는 지역을 입력해주세요</div>
        <input type="text"className='locate'></input>
        <button className='create' onClick={next2}>닉네임 생성하기</button>
      </div>
    );
  }
  
  export default Maker;
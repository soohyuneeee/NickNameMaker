import React from 'react';
import Header from './Header.js';
function Maker() {
    return (
        <div className='back2'>
        <Header/>
        <div className='text1'>닉네임을 만들 이름을 입력해주세요</div>
        <input type="text"className='name'></input>
        <div className='text2'>자신이 사는 지역을 입력해주세요</div>
        <input type="text"className='locate'></input>
      </div>
    );
  }
  
  export default Maker;
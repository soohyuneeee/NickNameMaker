import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Maker.css'

function check(name, locate){
  if(name.length==0){
    alert("닉네임")
    document.getElementsByClassName('text1').focus()
    return false
  }
  else if(locate.length==0){
    alert("지역")
    document.getElementsByClassName('text2').focus()
    return false
  }
  else return true

}


function Maker() {

  let navigate = useNavigate();
  let [name, setname] = useState("");
  let [locate, setlocate] = useState("");
  return (
    <div className='back2'>
      <div className='text1'>닉네임을 만들 이름을 입력해주세요</div>
      <input type="text" className='name' autoFocus onChange={(event) => {
        setname(event.target.value);
      }}></input>
      <div className='text2'>자신이 사는 지역을 입력해주세요</div>
      <input type="text" className='locate' onChange={(event) => {
        setlocate(event.target.value);
      }}></input>
      <button className='create' onClick={() => { 
        if(check(name, locate)) {
        navigate('/result', { state: { name: name, locate: locate } })
        }
      }}>닉네임 생성하기</button>
      <div></div>
    </div>
  );
}
export default Maker;
import React from "react";
import Header from './Header.js'

function Result(){
    function copy(){
        //복사해야함
    }
    function next3(){
        '/home'//으로 가야함
    }
    return(
        <div>
            <Header/>
            <div className="resul1">당신의 닉네임은...</div>
            <div className="result2">{/*생성된 값*/}</div>
            <button className="btn1" onClick={copy}>복사하기</button>
            <button className="btn2"onClick={next3}>홈으로</button>
        </div>
    )
}
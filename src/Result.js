import React from "react";
import Header from './Header.js'

import { BrowserRouter, Route,Routes } from 'react-router-dom';

function Result(){
    const vill = ["맥도날드 빨대도둑","붉은색 흠뻑 티를 입고 있는","곰돌이랑 강낭콩이랑 뽀뽀한","돌려돌려 돌림판에서 하와이 여행권 나온","새마을금고 털다가 경찰한테 발각된","헬스장 땀냄새 빌런","노래방 삑사리 빌런","공중화장실 휴지도둑","골목대장과 한판 떠서 승리한"];
    const getRandomIndex = function(length){
        return parseInt(Math.random()*length)
    }
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
            <div className="result2">{getRandomIndex(vill.length)}</div>
            <button className="btn1" onClick={copy}>복사하기</button>
            <button className="btn2"onClick={next3}>홈으로</button>
        </div>
    )
}
export default Result;
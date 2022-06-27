import React from "react";
import Header from './Header.js'
import { Link, useLocation } from "react-router-dom";
import './Result.css';
import { BrowserRouter, Route,Routes ,useNavigate } from 'react-router-dom';
function Result(){
    let navigate = useNavigate();
    const location = useLocation();
    const a = location.state.name;
    const b = location.state.locate;
    const vill = ["맥도날드 빨대도둑","흠뻑쇼 예매 실패해서 양도구매 한","고구마먹고 핵방구 뀐","어릴 적 보니하니 열성 팬이였던","집에서 샤워할때 노래방으로 만드는","","돌려돌려 돌림판에서 하와이 여행권 나온","새마을금고 털다가 경찰한테 발각된","헬스장 땀냄새 빌런","노래방 삑사리 빌런","공중화장실 휴지도둑","골목대장과 한판 떠서 승리한","급식실 숙가락 도둑","맥도날드 감자튀김 한입충","거북알 한입만 먹는다 해놓고 계속 먹고 한입이라고 우기는","피자 페퍼로니 도둑","중국 양산겜 광고 끝까지 시청하는","상대 의견 압살하고 탕수육 소스 붓는","민트 초코 한입만 권하는","액체괴물 만들어서 혼자 브이로그 찍는 척하는",""];
    const getRandomIndex = function(length){
        let c=parseInt(Math.random()*length)
        return vill[c];
    }
    function Copy(){
        //복사해야함
    }

    return(
        <div>
            <Header/>
            <div className="resul1">당신의 닉네임은...</div>
            <div className="result2">{b} {getRandomIndex(vill.length)} {a}</div>
            <button className="btn1" onClick={() => navigator.clipboard.writeText(this.state.text)}>복사하기</button>
            <button className='create' onClick={()=>{
          navigate('/')
        }}>홈으로</button>
           
        </div>
    )
}
export default Result;
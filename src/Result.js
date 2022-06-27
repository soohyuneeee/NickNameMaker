import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {

    let navigate = useNavigate();
    const location = useLocation();

    const a = location.state.name;
    const b = location.state.locate;

    const keyword = ["맥도날드 빨대도둑", "고구마 먹고 핵방구 뀐", "어릴 적 보니하니 열성 팬이였던", "집에서 샤워할때 노래방으로 만드는", "마트 시식코너 흡입 빌런", "돌려돌려 돌림판에서 하와이 여행권 나온", "새마을금고 털다가 경찰한테 발각된", "헬스장 땀냄새 빌런", "노래방 삑사리 빌런", "공중화장실 휴지도둑", "골목대장과 한판 떠서 승리한", "급식실 숙가락 도둑", "맥도날드 감자튀김 한입충", "거북알 한입만 먹는다 해놓고 계속 먹고 한입이라고 우기는", "피자 페퍼로니 도둑", "중국 양산겜 광고 끝까지 시청하는", "상대 의견 압살하고 탕수육 소스 붓는", "민트 초코 한입만 권하는", "액체괴물 만들어서 혼자 브이로그 찍는 척하는", "아마스빈 빨대도둑", "시크릿쥬쥬리미티드에디션 컬렉션 모으는", "콩순이 냉장고 꾹느르면 물나와요 흥얼거리고 다니는", "문방구 딱지도둑", "미술학원 아이클레이 도둑", "중국집 장난전화 빌런", "크아 패드립장인", "지하철 귀칼 빌런", "단소살인마", "숟가락살인마", "탄생석 코하쿠토", "배라 맛보기스푼 5번 빌런","아침운동 고요 속 방귀 빌런","자습시간 꼬르륵 빌런","교장실 벨튀도둑","스터디카페 asmr 빌런","불주먹일 뻔 한 물주먹","나와바리","온라인 일진","초등학교 조폭마누라","청소시간에 바닥 틈 먼지 긁어내는","대표 마기꾼"];

    const getRandomIndex = function (length) {
        let c = parseInt(Math.random() * length)
        return keyword[c];
    }
    let text = '아직 구현 못했써';

    return (
        <section>
            <div className="text3">당신의 닉네임은...</div>
            <div className="nickName"><span>{b} {getRandomIndex(keyword.length)} {a}</span></div>

            <button className="btn1" onClick={() => navigator.clipboard.writeText(this.state.text)}>복사하기</button>
            <button className='goHome' onClick={() => {
                navigate('/')
            }}>홈으로</button>

        </section>
    )
}
export default Result;
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import './Result.css';

function Result(items) {

    let navigate = useNavigate();
    const location = useLocation();
    let [like, setLike] = useState();
    let isBackgroundRed = false

    const name = location.state.name;
    const locate = location.state.locate;

    const keyword = ["맥도날드 빨대도둑", "고구마 먹고 핵방구 뀐", "어릴 적 보니하니 열성 팬이였던", "집에서 샤워할때 노래방으로 만드는", "마트 시식코너 흡입 빌런", "돌려돌려 돌림판에서 하와이 여행권 나온", "새마을금고 털다가 경찰한테 발각된", "헬스장 땀냄새 빌런", "노래방 삑사리 빌런", "공중화장실 휴지도둑", "골목대장과 한판 떠서 승리한", "급식실 숙가락 도둑", "맥도날드 감자튀김 한입충", "거북알 한입만 먹는다 해놓고 계속 먹고 한입이라고 우기는", "피자 페퍼로니 도둑", "중국 양산겜 광고 끝까지 시청하는", "상대 의견 압살하고 탕수육 소스 붓는", "민트 초코 한입만 권하는", "액체괴물 만들어서 혼자 브이로그 찍는 척하는", "아마스빈 빨대도둑", "시크릿쥬쥬리미티드에디션 컬렉션 모으는", "콩순이 냉장고 꾹느르면 물나와요 흥얼거리고 다니는", "문방구 딱지도둑", "미술학원 아이클레이 도둑", "중국집 장난전화 빌런", "크아 패드립장인", "지하철 귀칼 빌런", "단소살인마", "숟가락살인마", "탄생석 코하쿠토", "배라 맛보기스푼 5번 빌런", "아침운동 고요 속 방귀 빌런", "자습시간 꼬르륵 빌런", "교장실 벨튀도둑", "스터디카페 asmr 빌런", "불주먹일 뻔 한 물주먹", "나와바리", "온라인 일진", "초등학교 조폭마누라", "청소시간에 바닥 틈 먼지 긁어내는", "대표 마기꾼","프듀 나가면 101등 하는", "풀스택 개발자", "육각형 인재", "일자형 인재", "T자형 인재", "올리브영에서 테스트 셈플로 풀메하는", "영화관에서 고기 구워먹는", "3대가 탈모인"];

    const getRandomIndex = function (length) {
        let random = parseInt(Math.random() * length)
        return keyword[random];
    }
    let nickName = locate + ' ' + getRandomIndex(keyword.length) + ' ' + name;
    return (
        <div className="dov">

            <div className="text3">당신의 닉네임은...</div>
            <div className="nickName"><span>{nickName}</span></div>
            <div className="span">
                <CopyToClipboard text={nickName} onCopy={() => alert("닉네임이 복사되었습니다")}>
                    <button className="btn1">복사하기</button>
                </CopyToClipboard>
                <button className='refresh' onClick={() => {
                    window.location.reload();
                }}>새로고침</button>
            </div>
            <div className="like" onClick={() => {
                isBackgroundRed = !isBackgroundRed
                console.log(isBackgroundRed)
            }}
            > ❤️ </div>

        </div>


    )
}
export default Result;
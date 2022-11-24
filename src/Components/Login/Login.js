import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


function Login(){
    return(
        <Dogin>
            <Text>
                <input type="text" style={{height:"10%" ,width:"100%"}}></input>
                <input type="text"style={{height:"10%",width:"100%"}}></input>
            </Text>
            <Button>
            <Button1>로그인하기</Button1>
            <Button2>회원가입 하기</Button2>
            </Button>
            <Without>로그인 하지 않고 시작하기</Without>
        </Dogin>
    )
}
export default Login;
const Dogin = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content: center;
    background-color:white;
    position:fixed;
    width:60%;
    height:70ex;
    left:50%;
    top:20%;
    transform: translateX(-50%); 
    border-radius:10px;
`;
const Button = styled.div`
    display:inline-flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin-bottom:9%;
`
const Button1 = styled.button`
    border:0;
    width:10vw;
    height:5vh;
    font-size:1vw;
    font-family: "paybooc-Light", sans-serif;
    border-radius:8px;
    font-weight: 600;
    transition: 0.25s;

    &:hover{
        cursor: pointer;
        letter-spacing: 0.1vw;
        transform: scale(1.1);
    }

`;
const Button2 = styled.button`
    border:0;
    width:10vw;
    height:5vh;
    font-size:1vw;
    font-family: "paybooc-Light", sans-serif;
    border-radius:8px;
    font-weight: 600;
    top: 90%; 
    transition: 0.25s;

    &:hover{
        cursor: pointer;
        letter-spacing: 0.1vw;
        transform: scale(1.1);
    }

`;
const Form = styled.div`
    display:flex;
    justify-content: center;

`
const Without = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    color:gray;
    font-size:1vw;
    bottom:7%;
    
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const Text = styled.div`
    position:fixed;
    display: inline-flex;
    justify-content:center;
    flex-direction:column;
    top:20%;
    width:50%;
    height:50%;
    vertical-align:middle;
    gap: 30%;
`
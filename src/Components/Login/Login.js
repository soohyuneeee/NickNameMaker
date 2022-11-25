import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components"


function Login() {
    return (
        <Contain>
            <Dogin>
                <h2 style={{ fontSize: "30px", marginTop: "50px" }}><b>Login</b></h2>
                <Text><b><span>아이디를 입력해 주세요.</span></b>
                    <input type="text" style={{ height: "10%", width: "100%", paddingLeft: "10px", borderRadius: "10px" }}></input>
                    <b><span>비밀번호를 입력해 주세요.</span></b>
                    <input type="password" style={{ height: "10%", width: "100%", paddingLeft: "10px", borderRadius: "10px" }}></input>
                </Text>
                <Button>
                    <Button1>로그인하기</Button1>
                    <Button2>회원가입 하기</Button2>
                </Button>
                <Without><a href="/maker" style={{ textDecoration: "none", color: "gray" }}>로그인 하지 않고 시작하기</a></Without>
            </Dogin></Contain>
    )
}
export default Login;

const Contain = styled.div`
    width: 100%;
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Dogin = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background-color:white;
    width:60%;
    height:70ex;
    border-radius:10px;
    transition: 0.25s;
    &:hover{
        transform:scale(1.01)
    }
    
`;
const Button = styled.div`
    display:inline-flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin-bottom:3%;
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
    display: inline-flex;
    justify-content:center;
    flex-direction:column;
    width:50%;
    height:50%;
    vertical-align:middle;
    gap: 20px;
    margin-bottom:40px;
`
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


function Login(){
    return(
        <Dogin>
            <Form>
            <Button>
            <Button1>로그인하기</Button1>
            <Button2>회원가입 하기</Button2>
            </Button>
            <Without>로그인 하지 않고 시작하기</Without>
            </Form>
        </Dogin>
    )
}
export default Login;
const Dogin = styled.div`
    background-color:white;
    width:50em;
    height:70ex;
    position:absolute;
    left:50%;
    top:20%;
    transform: translateX(-50%); 
    border-radius:10px;
`;
const Button = styled.div`
    width:20em;
    height:20ex;
`
const Button1 = styled.button`
 
    margin: auto;
    width:10vw;
    height:5vh;
    font-size:0.8em;
    font-family: "paybooc-Light", sans-serif;
    border-radius:8px;
    font-weight: 600;
    transition: 0.25s;
    position: absolute; 
    top: 90%; 
    transform: translateY(-50%); 
    left:30%

`;
const Button2 = styled.button`
 
    margin: auto;
    width:10vw;
    height:5vh;
    font-size:0.8em;
    font-family: "paybooc-Light", sans-serif;
    border-radius:8px;
    font-weight: 600;
    transition: 0.25s;
    position: absolute; 
    top: 90%; 
    text-decoration:none;
    transform: translateY(-50%); 
    left:50%

`;
const Form = styled.div`
    vertical-align:middle;
    display:table-cell;

`
const Without = styled.div`
    position:absolute;
    color:gray;
    font-size:0.9em;
    left:38%;
    bottom:2%;
`
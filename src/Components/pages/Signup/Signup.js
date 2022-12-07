import React,{useState, useRef } from "react";
import styled from "styled-components";

function Signup() {
    let [id, setid] = useState("")
    let [password, setpassword] = useState("")
    let [checkPassword, setcheckPassword] = useState("")
    const PwdInput = useRef()
    function Lock(){
        if(password.length>=5){
            return ""
        }
        else return "readonly"
    }
    return(
        
        <Contain>
            <SSignup>
            <h2 style={{ fontSize: "30px", marginTop: "50px" }}><b>Signup</b></h2>
            <Text><b><span>아이디를 입력해 주세요.</span></b>
                    <input type="text" autoFocus style={
                        {
                            height: "10%", width: "100%", paddingLeft: "10px", borderRadius: "10px"
                        }} onChange={(event) => {
                            setid(event.target.value);
                        }}>
                    </input>
                    <b><span>비밀번호를 입력해 주세요.</span></b>
                    <input type="password" style={
                        {
                            height: "10%", width: "100%", paddingLeft: "10px", borderRadius: "10px"
                        }} onChange={(event) => {
                            setpassword(event.target.value)
                        }}>
                    </input>
                    <b><span>비밀번호를 한 번 더 입력해주세요.</span></b>
                    <input type="password" readOnly style={
                        {
                            height: "10%", width: "100%", paddingLeft: "10px", borderRadius: "10px" 
                        }}  onChange={(event) => {
                            setcheckPassword(event.target.value)
                        }}>
                    </input>
                </Text>
            </SSignup>
        </Contain>
    )
}
export default Signup;

const Contain = styled.div`
    width:100%;
    height:87vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:wheat;
`
const SSignup = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
    width:60%;
    height:70ex;
    border-radius:10px;
    transition: 0.25s;
    &:hover{
        transform:scale(1.01)
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
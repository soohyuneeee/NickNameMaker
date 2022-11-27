import React from "react";
import styled from "styled-components";
function Signup() {
    return(
        <Contain>
            <SSignup>

            </SSignup>
        </Contain>
    )
}
export default Signup
const Contain = styled.div`
    width:100%;
    height:87vh;
    display:flex;
    justify-content:center;
    align-items:center;
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
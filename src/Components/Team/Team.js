import React, {useState } from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'
import RoleAccess from './RoleAccess'
const Team = ()=> {
    const [roleBtn, setRoleBtn] = useState(true);

  return (
        <Container>
            <ButtonGroup>
                <p>
                    <span>
                        Members
                    </span>
                </p>
                <p>
                    <span onClick={() => setRoleBtn(true)}>
                         Role Access
                    </span>
                </p>
                
            </ButtonGroup>
            {roleBtn && <RoleAccess/> }
            
        </Container>
  )
}

export default Team

const Container = Styled.div`
display:flex;
justify-content:flex-start !important;
align-items:center;
flex-direction:column;
width: 100%;
height:calc(100vh - 60px);
transform:translateY(50px);
@media only screen and (max-width: 600px) {
    width:200px;
    transform:translate(-10vw,8vh);
}

`

const ButtonGroup = Styled.div`
display:flex;
justify-content:flex-start;
align-items: center;
width:100%;
height:50px;
box-shadow:0 0 3px rgba(0,0,0,.1);
position:sticky;
margin-bottom: 2rem;
p{

span{
    margin-left: 10px;
    padding-left: 10px; 
    text-decoration:none !important;
    cursor: pointer;
    position:relative;
    &:after{
        content:"";
        height:2px;
        background:white;
        position:absolute;
        left:0;
        right: 0;
        
        bottom: -3px;
        opacity:1;
        transform:scaleX(1);
  
  
      }



}
&:hover{
    color:red;
    span:after{
      transform:scaleX(1);
      opacity:1;
      background:darkred;
      transition: 0.5s;

    }
}
`
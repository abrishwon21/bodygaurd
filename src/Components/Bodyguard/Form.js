import React,{useState} from 'react'
import PersonalInfo from './PersonalInfo'
import Styled from 'styled-components'
import {AiOutlineUser} from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

function Form(props) {
    const [isStepActive, setIsStepActive ]= useState([true,false,false,false]);

  return (
    
       <Wrapper>
          <div>
                <hr/>
                <StepContainer>
                    <StepBadges>
                        <span status={isStepActive[0]} className="prsnalInfo"></span>
                        <p>Personal Info</p>
                    </StepBadges>
                    <StepBadges>
                        <span status={isStepActive[1]}></span>
                        <p>Documents</p>
                    </StepBadges>
                    <StepBadges>
                        <span status={isStepActive[2]}></span>
                        <p>License</p>
                    </StepBadges>
                    <StepBadges>
                        <span status={isStepActive[3]}></span>
                        <p>Hourly Rate</p>
                    </StepBadges>
                    
                </StepContainer>
                <AvatorSection>
                    <AvatorContainer>
                        <AvatorIcon/>
                        <p><AvatorBadge/></p>
                    </AvatorContainer>
                </AvatorSection>
          </div>
            <PersonalInfo/>

            <ButtonGroup>
                <CancelButton>
                        Cancel
                </CancelButton>
                <NextButton>
                        Next
                </NextButton>

            </ButtonGroup>
       </Wrapper>    

  
  )
}

export default Form;

const Wrapper = Styled.div`

z-index:9999;
overflow:auto;
`
const StepContainer= Styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:3rem;
height: 60px;
.prsnalInfo{
    background:darkred !important;
}
span{ 
    width:6px;
    height: 6px;
    border-radius: 50%;
    background: ${props=>props.status? 'red':'#ccc'};
    font-size:12px;
    font-weight: bold;
    transform:translateY(-20px);
    padding:6px;

   
  

}
`
const StepBadges=Styled.div`
display:flex;
justify-content:space-around;
align-items:flex-start;
`
const AvatorSection = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`

const AvatorContainer = Styled.div`
width:60px;
height:60px;
background:#ccc;
border-radius:50%;
transform:translateX(26vw);
cursor: pointer;

p{
    width:26px;
    height:26px;
    background:darkred;
    border-radius:50%;
 
    transform:translate(38px,-20px);
    border: 2px solid #ccdcdc;

}

`
const AvatorIcon = Styled(AiOutlineUser)`
color:white;
transform:translate(15px,15px);
font-size:30px;

`
const AvatorBadge = Styled(IoMdAdd)`
font-weight:600;
font-size:20px;
color:white !important;
font-size:20px;

`
const ButtonGroup = Styled.div`
display:flex;
justify-content: flex-end;

bottom: 0;
right: 0;
margin-right: 10px;

`
const NextButton = Styled.button`
float:right;
display:block;
width: 60px;
background:#cc0f0c;
border-radius:2px;
padding-left:10px; 
margin-left: 10px;
color:white;
`
const CancelButton = Styled.button`

float:right;
display:block;
width: 60px;
background:#FFFE;
border-radius:2px;
padding-left:10px;

`
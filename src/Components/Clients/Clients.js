import React, {useState} from 'react'
import Styled from 'styled-components'
import {IoIosArrowBack } from 'react-icons/io'
import DataTable from './Datatable'

const Clients=()=> {
const [ servicebtn, setServicebtn] = useState(true);
  return (
    <Container>
        <TopBarContainer>
        <TopBar>
            <BackArrow/>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />  
            <span>Jim green</span> 
        </TopBar>
        <MidleBar>
            <span>Profile</span>
            <span onClick={() => setServicebtn(true)}>Service history</span>
            <span>Payments</span>
        </MidleBar>
        </TopBarContainer>
        
        <TableContainer>
            { servicebtn && <DataTable/>  }
        </TableContainer>
        
    </Container>
  )
}

export default Clients;

const Container = Styled.div`
display:flex;
flex-direction: column;
justify-content:flex-start;
top:0;

@media screen and (max-width:600px){
    
    transform:translateX(20vw);
}



`
const TopBarContainer = Styled.div`
position:sticky;
z-index:99;

overflow:hidden;
background:white;
box-shadow:0 0 3px rgba(0,0,0,.2);
width:100%;
padding: 0 6px;
top:60px;

`
const TopBar = Styled.div`
display:flex;
justify-content:flex-start;
box-shadow: 0 0 10 rgba(0,0,0,.2);



img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;

}
span{
    cursor: pointer;

}
`
const BackArrow = Styled(IoIosArrowBack)`
cursor: pointer;
font-weight:600;
font-size:20px;
`
const MidleBar = Styled.div`
display:flex;
justify-content:flex-start;
align-items: center;

span{
    font-weight: bold;
    padding: 12px;
    font-size:14px;
    cursor: pointer;

}
`

const TableContainer = Styled.div`
overflow-y: auto;
height: 60vh;
top: 6px;
@media screen and (max-width:600px){
    width:300px;
    overflow-x:auto;
    transform:translateX(-20v);
}

`

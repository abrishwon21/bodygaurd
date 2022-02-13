import React,{ useState } from 'react'
import Sidebar from './Sidebar'
import Styled from 'styled-components';
import {IoIosNotificationsOutline} from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
const Header=(props)=> {

  return (

    <HeaderContainer>
   
       <Logo>
           WD
       </Logo>
       {// Right Primary menu will contain the profile info, notifications, message and 
       //any other important informations as requirements
       }
       <RightPrimaryMenu>
         {
         //notification button 
         }
            <TogleBar onClick={props.togglehandler}>
                <MenuIcon/>
            </TogleBar>
            
            <Notification>
                <NotificationIcon/>
                <span className="notificationIconBage">2</span>
            </Notification>
            {
           //Profile button 
          }
            <Profile>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            </Profile>
       </RightPrimaryMenu>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = Styled.div`

display:flex;
justify-content:space-between;
align-items:center;
box-shadow: 0 0 5px rgba(0,0,0,.5);
width:100%;
height: 50px;
background-color: white;
position: fixed;
top: 0;
z-index: 999;
`
const Logo = Styled.div`
  color:red;
  font-weight:600;
  font-size:24px;
  border: 1px solid red;
  padding: 2px;
  cursor: pointer;
  margin-left:10px;
`
const TogleBar = Styled.div`
opacity:0;
@media screen and (max-width:600px){
opacity:1;
}
`
const MenuIcon = Styled(AiOutlineMenu)`
width:30px;
height:30px;
opacity:1;
margin-right:10px;
font-size:20px;
cursor: pointer;

`
const RightPrimaryMenu = Styled.div`
display: flex;
align-items: center;
position: relative;
justify-content:space-between;
padding:20px;


`
const Notification = Styled.div`
position: relative;
cursor: pointer;
margin-right: 10px;
color: #555;

.notificationIconBage{
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}


`
const Profile = Styled.div`

img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

`
const NotificationIcon = Styled(IoIosNotificationsOutline)`
font-size: 25px;
font-weight: bold;


`


import React from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'
import {AiOutlineLogout} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiGuards} from 'react-icons/gi'
import {AiOutlineTeam} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineNotification} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
const Sidebar=(props)=> { 
 const closbtn = ()=> {
      props.hide(false);
  }
  return (
    <SidebarContainer show={props.show}>

      
        <Menu>
        <CloseContainer onClick={closbtn}>
      <CloseBtn/>
      </CloseContainer>
            <Link to="/dashboard"  className="sidebarlist" activeStyle={{background: 'red'}}>
                <DashboardIcon className="menuIcon" />
                <span>Dashboard</span>
            </Link>
            <Link to="client" >
                <ClientIcon className="menuIcon" activeStyle={{background: 'red'}}/>
                <span>Clients</span>
            </Link>
            <Link to="/bodyguard">
                <BodyGuardIcon className="menuIcon" activeStyle={{background: 'red'}}/>
                <span>Bodyguard</span>
            </Link>
            <Link to="/">
                <TeamIcon className="menuIcon" activeStyle={{background: 'red'}}/>
                <span>Team</span>
            </Link>
            <Link to="/setting">
                <SettingsIcon className="menuIcon" activeStyle={{background: 'red'}}/>
                <span>Settings</span>
            </Link>
            <Link to="/notification">
                <NotificationIcon className="menuIcon" activeStyle={{background: 'red'}}/>
                <span>Notification</span>
            </Link>
            
        </Menu>
        <Logout>
          <LogoutIcon/>
          <span>Logout</span>
        </Logout>

    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    position:sticky;
    background:white;
    width:250px;
    top: 100px !important;
    height: calc(100vh - 50px);
    left:0;
    bottom:0;
    z-index:99;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
   transform:translateY(50px);
    transition: 0.5s ease-in;
    .menuIcon{
      font-weight:bold;
      font-size:20px;
      margin-right: 6px;

    }

@media screen and (max-width: 600px) {

  transform:translateX(-100%); 
  transform:${props=>props.show? 'translateX(0%)':'translateX(-100%)'};
}

`
const CloseContainer = Styled.div`
opacity:1;

`
const CloseBtn = Styled(AiOutlineClose)`
transform:translateX(100px);
font-weight:bold;
font-size:20px;
cursor: pointer;

`
const Menu = Styled.div`
display:flex;
justify-content:space-between;
align-items:start;
flex-direction:column;
margin-bottom: 2rem;
padding: 5px;
margin: 10px;
z-index:99;

a{
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
 text-decoration: none !important;

}
&:after{
  span:hover {
    background-color: red;
  }
}


`
const Logout = Styled.div`

bottom:0px !important;
font-weight:400;
margin-bottom:2px;
position:absolute;
margin:10px;
display:flex;
align-items: center;
justify-content:space-between;




`
//defining icons
const LogoutIcon = Styled(AiOutlineLogout)`
`

const DashboardIcon= Styled(AiOutlineHome)`
`

const ClientIcon = Styled(AiOutlineUser)`
`

const BodyGuardIcon= Styled(GiGuards)`
`
const TeamIcon = Styled(AiOutlineTeam)`
`

const SettingsIcon= Styled(AiOutlineSetting)`
`
const NotificationIcon = Styled(AiOutlineNotification)`
`

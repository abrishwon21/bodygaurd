import React,{useState} from 'react'
import Modal from 'react-modal'
import Styled from 'styled-components'

import {Link } from 'react-router-dom'
import Form from './Form'
function AddBodyguard(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [addUser, setAddUser] = useState(false);

   
  return (
    <Container>
        
           {<Backdrop/>?
             <FormModal isOpen={props.show}>
                
             
               <h4>Add New Bodyguard</h4>
               <Form/>

               <Close type="button" onClick={props.hide} class>Close</Close>

              
           </FormModal> :""}
    </Container>
  )
}

export default AddBodyguard
const Backdrop = Styled.div`
width:100%;
height:100vh;
background:#cccc;
z-index: 99999 important;
position:fixed;
top: 0;
bottom:0;
right: 0;
left: 0;
`
const Container = Styled.div`
box-shadow: 0 2px 10px rgba(0,0,0,1);
z-index:9999 !important;

`


const FormModal = Styled(Modal)`
top: 0;
width: 60%;
height:90vh;
padding:10px;
left: 10px;
background:white;
z-index: 99999 !important;

overflow:auto;
right: 0;
transform:translate(30%, 10%);
box-shadow: 0 2px 10px rgba(0,0,0,1);
border: 1px solid #ccc;
button{
    right: 0;
    bottom: 0;
}

`

const Close = Styled.button`
background:darkred;
color:white;
font-weight:bold;
font-size:12px;
border-radius:5px;
cursor:pointer;
`
import React, { useState }from 'react'
import Styled from 'styled-components'
import Datatable from './Datatable'
import AddBodyguard from '../Bodyguard/AddBodyguard'
const RoleAccess = ()=> {

    const [modalOpen, setModalOpen] = useState(false);

    const HideModal = ()=> {
        return setModalOpen(false);
    }
  return (
    
        <Container>
           

            <FilterBar>
                <SearchBox>
                    <input type="text" placeholder="Search"/>
                </SearchBox>
                <ActionBtn onClick={()=>setModalOpen(true)}>
                    ADD
                </ActionBtn>
            </FilterBar>
            
            <TableContainer>
               <Datatable/>
                <AddBodyguard show={modalOpen} hide={HideModal} />
              
            </TableContainer>
         </Container>

  )
}

export default RoleAccess

const Container = Styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;


@media screen and (max-width:600px){
display:flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
}

`

const FilterBar = Styled.div`
display:flex;
justify-content: space-between;

align-items: center;
width: 100%;
height:50px;
margin-bottom: 2rem;
box-shadow: 0 0 3px rgba(0,0,0,.1);

@media screen and (max-width: 600px) {
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

`
const TableContainer = Styled.div`

transform:translateX(-40px);
@media screen and (max-width:600px){
    overflow-x:auto;
    width:100%;
    margin-left: -30px;
}

`

const SearchBox = Styled.div`
margin: 0 10px;
`
const ActionBtn = Styled.button`
margin: 0 10px;
background: darkred;
width: 60px;
padding: 2px 5px;
color:white;
cursor:pointer;
`

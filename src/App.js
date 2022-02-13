import React,{useState} from 'react';
import Styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Clients from './Components/Clients/Clients';
import AddBodyguard from './Components/Bodyguard/AddBodyguard'
import Team from './Components/Team/Team'

const App=()=> {
  const [showSideBar, setShowSideBar] = useState(false);
  const togglehandler = () => {
    return setShowSideBar(true);
  }
  const hideSideBar= (e) => {
    return setShowSideBar(e);
  }
  return (
    <div className="App">
      <Header togglehandler={togglehandler}/>
        <Container>
            <Sidebar show={showSideBar} hide={hideSideBar}/>
            <Routes> 
              <Route exact path="/dashboard"  element={<Dashboard/>}/>
              <Route exact path="/client" element={<Clients/>}/>
              <Route exact path="/" element={<Team/>}/>
              <Route exact path="/bodyguard" element={<AddBodyguard/>}/>
            </Routes>
        </Container>

      

    </div>
  );
}

export default App;

const Container = Styled.div`
display:flex;
align-items:center;
justify-content:flex-start;


`

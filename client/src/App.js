import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box, Heading } from '@chakra-ui/react';
import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import Teams from './Pages/Teams';
import getTeams from './APIUtils/getTeams';

function App() {

  const [navSize, changeNavSize] = useState("small")
  const [teams, setTeams] = useState()

  useEffect(() => {
    getTeams(setTeams)
  },[])

  useEffect(() => {
    console.log(teams)
  },[teams])

  return (
    <BrowserRouter>
      <SideBar changeNavSize={changeNavSize} navSize={navSize} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teams" element={<Teams teams={teams} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

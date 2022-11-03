import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box, Heading } from '@chakra-ui/react';
import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import Teams from './Pages/Teams';
import About from './Pages/About';
import Contact from './Pages/Contact';
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
      <Box transition='0.1s' ml={navSize === "small" ? "75px" : "200px"} pt="5vh">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teams" element={<Teams teams={teams} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

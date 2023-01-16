import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box, Heading } from '@chakra-ui/react';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Teams from './Pages/Teams';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';
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
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/teams" element={<Teams teams={teams} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

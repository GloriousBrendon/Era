import {useEffect, useState} from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';

import RootLayout from "./Pages/RootLayout";
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Teams from './Pages/Teams';
import Team from './Pages/Team';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';
import getTeams from './APIUtils/getTeams';

function App() {
  
  const [teams, setTeams] = useState([{
    id : 1,
    active : 1,
    team_name : "Shadow Garden"
  }])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={
          <>
            <Nav />
            <Home  />
          </>
        } />
        <Route path="/about" element={
          <>
          <Nav />
            <About />  
          </>
        } />
        <Route path="/contact" element={
          <>
          <Nav />
            <Contact />
          </>
        } />
        <Route path="/teams" element={
          <>
          <Nav />
            <Teams teams={teams} />
          </>
        } />
        <Route path="/teams/:team_name" element={
          <>
          <Nav />
            <Team teams={teams} />
          </>
        } />
      </Route>
    )
  )

  useEffect(() => {
    // getTeams(setTeams)
  },[])

  useEffect(() => {
    console.log(teams)
  },[teams])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

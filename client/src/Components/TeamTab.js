import { Box, Grid, GridItem, Heading, Image, Stack, Center } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';

function TeamTab({teamName}) {

  const [players, setPlayers] = useState({
    id : 1,
    name : "SWG Instinction INT",
    position : "Bot",
    team_id : "1",
    puuid : "1UyjRGYKG3VtMk8gn38dz02IUZYHIC6YOol8oRsCNH_U6ZMgJnpL12M0SbXbXOeaDSK7FZrJdgwFkA"
  })
  
  console.log(teamName)
  const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

  // useEffect(() =>{
  //   getPlayers(setPlayers)
  // },[])

  //http://127.0.0.1:3333/teams

    if (players === undefined)
    return (<></>)
  
    else return (
        <>
            <Center>{teamName.team_name}</Center>
        </>
    );
  };
  export default TeamTab;
import { Box, Grid, GridItem, Heading, Image, Stack, Center, Link, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';
import Positions from './Positions';
import AboutTeam from "./AboutTeam";
import Player from "./Player";

function TeamTab({teamName, teams, players, navSize}) {
  
  const [activePositon, setActivePosition] = useState("About")
  
  console.log(teamName)

  // useEffect(() =>{
  //   getPlayers(setPlayers)
  // },[])

  //http://127.0.0.1:3333/teams

    if (players === undefined)
    return (<></>)
  
    else return (
      <>
        <Center minH="100vh">
            <Positions activePositon={activePositon} setActivePosition={setActivePosition} navSize={navSize} />
          <Stack>
                {/* {activePositon === "About" ? <><Heading textAlign="center" color="white">{teamName.team_name}</Heading><AboutTeam /></> : <Player />} */}
                <Heading textAlign="center" color="white">{teamName.team_name}</Heading><AboutTeam />
                <Player />
              </Stack>
          </Center>
      </>
    );
  };
  export default TeamTab;
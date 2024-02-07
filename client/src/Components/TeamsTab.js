import { Box, Center, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';
import { Link } from "react-router-dom";

function TeamTab({teams}) {

  const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

  //http://127.0.0.1:3333/teams
      return (
        <>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-11">
          <Center><Heading color="white">{teams.team_name}</Heading></Center>
            {teams.map(x => x.active === 1 ?
            <>
              <Link to={`${x.team_name}`} className="transition duration-300 md:p-4 py-2 block text-[#E8E8E8] hover:text-[#922729]"
                >
              <Box m={2} p={3} bgGradient={`linear(to-r, dark, ${x.team_name}, dark)`} borderBottom={`solid 1px ${x.team_name}`} key={x.id} justifyContent="center" minHeight="20vh">
              <Stack text-align-center p={2} bg='dark'>
              <Heading>{x.team_name}</Heading>
                
              </Stack>
            </Box>
              </Link>
            </>
            :
            <></>)}
            </div>
        </>
    );
  };
  export default TeamTab;
import { Box, Grid, GridItem, Heading, Image, Stack, Center, Link, Flex } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';

function TeamTab({teamName, teams, players}) {
  
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
        <Center><Heading color="white">{teamName.team_name}</Heading></Center>
            <Box m={2} p={3} bgGradient={`linear(to-r, dark, ${teamName.team_name}, dark)`} borderBottom={`solid 1px ${teamName.team_name}`} justifyContent="center" minHeight="20vh">
            <Stack text-align-center p={2} bg='dark'>
                {
                positions.map(p => 
                  <GridItem w='100%'>
                    <Flex>
                    <Image h="50px" w="auto" src={require(`../Img/${p}.png`)} />
                    {players.map(y =>
                    <>
                        {(y.active === 1 && y.position === p.toString()) ? 
                        <h1 className="text-3xl font-semibold pb-5">{y.name}</h1>
                        :
                        <></>
                    }
                    </>
                    )}
                    </Flex>
                  </GridItem>
                )
              }
              
            </Stack>
          </Box>
      </>
    );
  };
  export default TeamTab;
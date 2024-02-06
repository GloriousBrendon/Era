import { Box, Center, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';
import { Link } from "react-router-dom";

function TeamTab({teams}) {

  const [players, setPlayers] = useState()

  const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

  useEffect(() =>{
    getPlayers(setPlayers)
  },[])

  //http://127.0.0.1:3333/teams

    if (players === undefined)
    return (<></>)
  
    else return (
        <>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-11">
            {teams.map(x => x.active === 1 ?
            <>
              <Link to={`${x.team_name}`} className="transition duration-300 md:p-4 py-2 block text-[#E8E8E8] hover:text-[#922729]"
                >
              <Box m={2} p={3} bgGradient={`linear(to-r, dark, ${x.team_name}, dark)`} borderBottom={`solid 1px ${x.team_name}`} key={x.id} justifyContent="center" minHeight="20vh">
              <Stack text-align-center p={2} bg='dark'>
              <Heading>{x.team_name}</Heading>
                  {
                  positions.map(p => 
                    <GridItem w='100%'>
                      <Flex>
                      <Image h="50px" w="auto" src={require(`../Img/${p}.png`)} />
                      {players.map(y =>
                      <>
                          {(y.team_id === x.id && y.active === 1 && y.position === p.toString()) ? 
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
              </Link>
            </>
            :
            <></>)}
            </div>
        </>
    );
  };
  export default TeamTab;
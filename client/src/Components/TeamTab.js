import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';

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
            {teams.map(x => x.active === 1 ? 
            <Box m={2} p={3} bgGradient={`linear(to-r, dark, ${x.team_name}, dark)`} borderBottom={`solid 1px ${x.team_name}`} key={x.id} justifyContent="center" minHeight="20vh">
              <Stack p={2} bg='dark'>
              <Heading>{x.team_name}</Heading>
              <Grid templateColumns='repeat(5, 1fr)' gap={3}>
                {
                  positions.map(p => 
                    <GridItem w='100%'>
                      <Image h="40%" w="auto" src={require(`../Img/${p}.png`)} />
                      {players.map(y =>
                      <>
                          {(y.team_id === x.id && y.position === p.toString()) ? 
                          <Stack>
                          <a href={`https://www.op.gg/summoners/euw/${y.name}`}><Heading size="md">{y.name}</Heading></a>
                          </Stack>
                          :
                          <></>
                      }
                      </>
                      )}
                    </GridItem>
                  )
                }
              </Grid>
              </Stack>
            </Box>
            :
            <></>)}
        </>
    );
  };
  export default TeamTab;
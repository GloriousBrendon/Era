import { Center, Grid, GridItem, Heading, Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import getPlayers from '../APIUtils/getPlayers';
import { Link } from "react-router-dom";
import hero from "../Img/hero.jpg"

function TeamTab({teams}) {

  const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

  //http://127.0.0.1:3333/teams
      return (
        <>
          <Center minH="100vh">
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              {teams.map(x => x.active === 1 ?
              <GridItem
              bgImage={require(`../Img/${x.id}.jpg`)}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover" w='100%'
              _hover={{
                textDecor: "none",
                color: `#B026FF`
              }}
              >
              <Box
              bgColor="blackAlpha.700"
              transition='0.1s'
              _hover={{
                bgColor: "blackAlpha.100",
                transition: '0.4s'
                }} pt="1"
                pb="1">
                <Link to={`${x.team_name}`} >
                  <Center h="50vh" m={2} p={3} border={`solid 1px white`} key={x.id}
                  _hover={{
                  textDecor: "none",
                  border: `solid 1px #B026FF`
                  }}>
                    <Heading>{x.team_name}</Heading>
                  </Center>
                </Link>
                </Box>
              </GridItem>
              :
              <></>)}
            </Grid>
          </Center>
        </>
    );
  };
  export default TeamTab;
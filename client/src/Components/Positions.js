import { Box, Grid, GridItem, Heading, Image, Stack, Center, Flex, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function TeamTab({activePositon, setActivePosition, navSize}) {

  const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

  useEffect(() =>{
    console.log(activePositon)
  },[activePositon])

  // useEffect(() =>{
  //   getPlayers(setPlayers)
  // },[])

  //http://127.0.0.1:3333/teams
  
    return (
      <Center
      bg="#1F2022"
      zIndex="190"
      pos="fixed"
      top="25vh"
      left={navSize === "small" ? "75px" : "200px"}
      boxShadow="xl"
      borderRadius={navSize === "small" ? "0px 5px 5px 0px" : "0px 10px 10px 0px"}
      w="80px"
      transition='0.1s'
      flexDir="column"
      justifyContent="space-between">
        <Stack p={2}>
            <Box
                as="button"
                borderLeft={activePositon === "About" && "3px solid #B026FF"}
                backgroundColor={activePositon === "About" && "blackAlpha.200"}
                borderRadius={2}
                _hover={{
                    textDecor: "none",
                    color: "#B026FF",
                    transition: '0.1s'
                    }}
                onClick={() => setActivePosition("About")} p="1">
                <Image h="50px" w="50px" src={require(`../Img/Lol.png`)} />
            </Box>
            {
              positions.map(p => 
              <Box
                as="button"
                borderLeft={activePositon === p && "3px solid #B026FF"}
                backgroundColor={activePositon === p && "blackAlpha.200"}
                borderRadius={2}
                _hover={{
                    textDecor: "none",
                    color: "#B026FF",
                    transition: '0.1s'
                    }}
                key={p} onClick={() => setActivePosition(p)} p="1">
                <Image h="50px" w="50px" src={require(`../Img/${p}.png`)} />
              </Box>
              )
            }
          </Stack>
      </Center>
    );
  };
  export default TeamTab;
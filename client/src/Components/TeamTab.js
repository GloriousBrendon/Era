import {
    Center, Flex, Heading, Stack, Image
  } from "@chakra-ui/react";
import era from "../Img/era.png"

function TeamTab({teams}) {
  
    return (
        <>
            {teams.map(x => x.active === true ? <Flex justifyContent="center" minHeight="50vh">
                    <Heading>{x.team_name}</Heading>
            </Flex>
            :
            <></>)}
        </>
    );
  };
  export default TeamTab;
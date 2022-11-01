import {
    Center, Heading, Stack, Image
  } from "@chakra-ui/react";
import era from "../Img/era.png"

function TeamTab() {
  
    return (
        <Center
        minHeight="100vh">
            <Stack textCenter>
                <Image src={era} />
                <Heading pl={3} size="2xl">esports</Heading>
            </Stack>
        </Center>
    );
  };
  export default TeamTab;
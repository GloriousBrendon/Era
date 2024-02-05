import { Center, Stack, Image, Heading, Text } from "@chakra-ui/react";
import introversionLogo from "../Img/Introversion.png"

function Banner() {
  
    return (
        <Center p="5" bg="#429E9D">
        <Image src={introversionLogo} width="150" height="150"></Image>
        <Stack>
            <Heading size="3xl">Developing talent</Heading>
            <Heading>one player at a time...</Heading>
        </Stack>
        </Center>
    );
  };
  export default Banner;
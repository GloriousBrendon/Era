import { Center, Stack, Image, Heading, Text } from "@chakra-ui/react";
import introversionLogo from "../Img/Introversion.png"

function Banner() {
  
    return (
        <Center p="5" bg="#B026FF">
        <Stack>
            <Heading size="3xl">Developing talent</Heading>
            <Heading>one player at a time...</Heading>
        </Stack>
        <Image src={introversionLogo} width="150" height="150"></Image>
        </Center>
    );
  };
  export default Banner;
import {
    Center, Heading, Stack, Image
  } from "@chakra-ui/react";
import bg from "../Img/bg.svg"
import era from "../Img/era.png"

function Hero() {
  
    return (
        <Center bgImage={bg}
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh">
            <Stack textCenter>
                <Image src={era} />
                <Heading pl={3} size="2xl">esports</Heading>
            </Stack>
        </Center>
    );
  };
  export default Hero;
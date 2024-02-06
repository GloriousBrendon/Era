import { Center, Stack, Image, Heading, Box, Flex, Grid,GridItem } from "@chakra-ui/react";
import introversion from "../Img/IntroversionFull.png"
import hero2 from "../Img/hero2.jpg"

function Hero() {
  
    return (
            <Center
            minH="100vh">
            <Grid templateColumns='repeat(2, 1fr)'>
            <Center>
            <GridItem p="4" textAlign="end" colSpan={1} >
            <Heading color="white" size="3xl">EVERY </Heading>
            <Heading color="#B026FF" size="4xl">DREAM</Heading>
            <Heading size="2xl">begins with a</Heading>
            <Heading color="#B026FF" size="3xl">DREAMER</Heading>
            <Heading>#StartDreaming</Heading>
            </GridItem>
            </Center>
            <GridItem bgImage={hero2}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover" colSpan={1} >
            <Image src={introversion} h="500" w="auto" />
            </GridItem>
            </Grid>
            </Center>
    );
  };
  export default Hero;
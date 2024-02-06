import Banner from "../Components/Banner";
import bg1 from "../Img/bg1.jpg"
import bg2 from "../Img/bg2.jpg"
import league from "../Img/league-of-legends.png"
import { Box, Stack, Flex, Heading, Text, Center } from "@chakra-ui/react";

function About() {
  return (
        <>
        <Center
                bgImage={bg1}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover">
                <Box bgColor="blackAlpha.500" minH="90vh" w="100%">
                <Center minH="100vh">
                <Stack textAlign="end" p="4">
                <Heading size="4xl">
                        THE
                </Heading>
                <Heading size="4xl">
                        MOST
                </Heading>
                <Heading size="4xl">
                        DEVOTED
                </Heading>
                </Stack>
                <Heading>
                        ESPORTS ORG IN THE WORLD
                </Heading>
                </Center>
                </Box>
        </Center>
        <Banner />
        <Center bgImage={bg2}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover">
                <Box bgColor="blackAlpha.500" minH="90vh" w="100%">
                <Center minH="90vh">
                <Stack textAlign="end" p="4">
                <Heading size="4xl">INTOVERSION</Heading>
                <Heading size="4xl">IS</Heading>
                </Stack>
                <Stack p="4">
                <Text>a dedicated org focussing on developing player skill, personalities and brands</Text>
                <Text>Through hard work, dedication and patience</Text>
                <Text>Practice, teamwork and communication</Text>
                <Text>Win with grace and lose with dignity</Text>
                </Stack>
                </Center>
                </Box>
        </Center>
        </>
  );
}

export default About;
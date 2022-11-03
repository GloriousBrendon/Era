import { Box, Heading, Center, Container, Text, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input } from '@chakra-ui/react';
import bg from "../Img/bg.svg"

function Contact() {
  return (
    <>
        <Center
        minH="100vh" bgImage={bg}
        bgPosition="center"
        bgRepeat="no-repeat">
        <Container textAlign="center" maxW='8xl'>
                <Box>
                <Heading size="3xl" pt={5}>Get in touch</Heading>
                <Box minH="40vh">
                    <form>
                <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' />
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>What would you like to ask us?</FormLabel>
                <Input type='text' />
                </FormControl>
                </form>
                </Box>
                </Box>
        </Container>
        </Center>
    </>
  );
}

export default Contact;
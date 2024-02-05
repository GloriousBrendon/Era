import { Center, Stack, Image, Heading } from "@chakra-ui/react";
import introversionLogo from "../Img/Introversion.png"

function Hero() {
  
    return (
        <section className="hero-image grid content-center justify-center">
            <Stack>
            <Center>
            <Image src={introversionLogo} width="500" height="500"></Image>
            </Center>
            </Stack>
        </section>
    );
  };
  export default Hero;
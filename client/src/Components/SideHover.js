import {
    Divider,
    Flex,
    Heading,
    Text
  } from "@chakra-ui/react";

function SideHover({ title, description }) {
  
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(100px - 7.5px )"
                ml="-10px"
                w={0}
                h={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight='10px solid #922729'
                boxShadow="xl"
            />
            <Flex
                h={250}
                w={250}
                flexDir="column"
                alignItems="center"
                bg="red"
                borderRadius="10px"
                textAlign="center"
                boxShadow="xl"
            >
                <Heading mt={4} size="lg" fontWeight="normal">{title}</Heading>
                <Divider w="50%" m={2} />
                <Text>{description}</Text>
            </Flex>
        </>
    );
  };
  export default SideHover;
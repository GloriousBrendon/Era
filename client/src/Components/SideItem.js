import {
    Flex,
    Menu,
    Link,
    MenuButton,
    Text,
    Icon,
    MenuList,
    useDisclosure
  } from "@chakra-ui/react";
import SideHover from "./SideHover";

function SideItem({ navSize, title, icon, active, description }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}

        >
            <Menu placement="right" isOpen={isOpen}>
                <Link
                    borderLeft={active && "3px solid red"}
                    backgroundColor={active && "blackAlpha.200"}
                    p={3}
                    _hover={{
                        textDecor: "none",
                        color: "red",
                        transition: '0.1s'
                }}
                
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                    w={navSize === "large" && "100%"}
                >
                <MenuButton w="100%" >
                    <Flex>
                        <Icon
                        as={icon}
                        fontSize="xl"
                        color="red"
                        _hover={{
                        color: 'red',
                        transition: '0.1s'
                }} />
                        <Text
                        ml={5}
                        display={navSize === "small" ? "none" : "flex"}
                        >{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                >
                    <SideHover title={title} description={description} />
                </MenuList>
            </Menu>
        </Flex>
    );
  };
  export default SideItem;
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

function NavItem({ navSize, title, icon, active, description, colormode }) {
  
    return (
        <Flex
            mt={2}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}

        >
            <Menu placement="right">
                <Flex
                    borderLeft={active && "3px solid #B026FF"}
                    backgroundColor={active && "blackAlpha.200"}
                    p={2}
                    borderRadius={2}
                    _hover={{
                        textDecor: "none",
                        color: "#B026FF",
                        transition: '0.1s'
                    }}
                    w={navSize === "large" && "100%"}
                >
                <MenuButton w="100%" >
                    <Flex>
                        <Icon
                        as={icon}
                        fontSize="xl"
                        ml={1}
                        color={active ? "#B026FF" : 'white'}
                        _hover={{
                        color: '#fd6a3d',
                        transition: '0.1s'
                }} />
                        <Text
                        ml={5}
                        display={navSize === "small" ? "none" : "flex"}
                        >{title}</Text>
                    </Flex>
                </MenuButton>
                </Flex>
            </Menu>
        </Flex>
    );
  };
  export default NavItem;
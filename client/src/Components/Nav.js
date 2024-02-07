import {useState} from "react";
import introversion from "../Img/Introversion.png"
import { Link } from "react-router-dom";
import { Image, Text, Center, Heading, Flex, Box, IconButton, Avatar } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { BsHouseDoor, BsQuestionCircle, BsCalendarDate, BsSortNumericUpAlt, BsChatRightDots, BsCashStack, BsMap, BsPeople } from "react-icons/bs"
import NavItem from "./NavItem";

function Nav() {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [navSize, changeNavSize] = useState("large")
    const [activePanel, setActivePanel] = useState("Home")
    var description = "test"
  
    return (
        <Flex
      bg="#1F2022"
      zIndex="200"
      pos="fixed"
      boxShadow="xl"
      minH="100vh"
      borderRadius={navSize === "small" ? "0px 5px 5px 0px" : "0px 10px 10px 0px"}
      w={navSize === "small" ? "75px" : "200px"}
      transition='0.1s'
      flexDir="column"
      justifyContent="space-between"
    >
        <Flex
          p="5%"
          flexDir="column"
          alignItems="center"
          as="nav"
        >
          <IconButton
            size="lg"
            color="white"
            background="none"
            mt={5}
            icon={<HamburgerIcon />}
            onClick={() => {
              if (navSize === "small")
                changeNavSize("large")
              else
                changeNavSize("small")
            }}
          />
          <Image src={introversion} width={navSize === "small" ? "50" : "150"} height={navSize === "small" ? "50" : "150"}></Image>
        <Text display={navSize === "small" ? "none" : "flex"} fontSize="120%" fontWeight="bold" mr={4}>INTROVERSION</Text>
        <Text display={navSize === "small" ? "none" : "flex"} color="#B026FF" mt={2} fontSize="120%" fontWeight="bold" mr={4}>ESPORTS</Text>
          <Box w="100%" onClick={() => setActivePanel("Home")}><Link to="/"><NavItem navSize={navSize} icon={BsHouseDoor} title="Home" description={description} active={activePanel === "Home" ? true : false} /></Link></Box>
          <Box w="100%" onClick={() => setActivePanel("About")}><Link to="/about"><NavItem navSize={navSize} icon={BsQuestionCircle} title="About" description={description} active={activePanel === "About" ? true : false} /></Link></Box>
          <Box w="100%" onClick={() => setActivePanel("Teams")}><Link to="/teams"><NavItem navSize={navSize} icon={BsPeople} title="Teams" description={description} active={activePanel === "Teams" ? true : false} /></Link></Box>
          <Box w="100%" onClick={() => setActivePanel("Calender")}><Link to="/calender"><NavItem navSize={navSize} icon={BsCalendarDate} title="Calender" description={description} active={activePanel === "Calender" ? true : false} /></Link></Box>
        </Flex>
      
    </Flex>
    );
  };
  export default Nav;
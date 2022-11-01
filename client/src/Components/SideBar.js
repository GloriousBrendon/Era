import { useState } from "react";
import {
  Flex, IconButton, Box, Heading, Image
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import SideItem from "./SideItem";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsPeople } from "react-icons/bs"
import era from "../Img/era.png";

function SideBar({ navSize, changeNavSize}) {

  var description = "test"
  const [activePanel, setActivePanel] = useState("Home")

  return (
    <Flex
      bg='statedark'
      pos="fixed"
      boxShadow="xl"
      minH="100vh"
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
            <Image pt={2} src={era} />
            <hr/>
          <IconButton
            size="lg"
            color="red"
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
          <Box w="100%" onClick={() => setActivePanel("Home")}>
        <Link to="/"><SideItem navSize={navSize} icon={BsHouseDoor} title="Home" description={description} active={activePanel === "Home" ? true : false} /></Link>
        </Box>
        <Box w="100%" onClick={() => setActivePanel("Teams")}>
        <Link to="/teams"><SideItem navSize={navSize} icon={BsPeople} title="Teams" description={description} active={activePanel === "Teams" ? true : false} /></Link>
        </Box>
            
        </Flex>
      
    </Flex>
  );
};
export default SideBar;

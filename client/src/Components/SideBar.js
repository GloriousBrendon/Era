import { useState } from "react";
import {
  Flex, IconButton, Box, Heading, Image, Divider, Text
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import SideItem from "./SideItem";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsPeople, BsInfoSquare, BsDiscord, BsFacebook, BsTwitter, BsTwitch } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { AiOutlineYoutube } from "react-icons/ai"
import era from "../Img/era.png";
import randymedia from "../Img/randymedia.svg";

function SideBar({ navSize, changeNavSize}) {

  var description = "test"
  const [activePanel, setActivePanel] = useState("Home")

  return (
    <Flex
      bg='dark'
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
            <Image pt={1} src={era} />
            <hr/>
          <IconButton
            size="lg"
            color="red"
            background="none"
            mt={2}
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
        <Box w="100%" onClick={() => setActivePanel("About")}>
        <Link to="/about"><SideItem navSize={navSize} icon={BsInfoSquare} title="About" description={description} active={activePanel === "About" ? true : false} /></Link>
        </Box>
        <Box w="100%" onClick={() => setActivePanel("Contact")}>
        <Link to="/contact"><SideItem navSize={navSize} icon={CiMail} title="Contact Us" description={description} active={activePanel === "Contact" ? true : false} /></Link>
        </Box>
        <Divider p={1} w="80%" />
        <Box w="100%">
        <a href="https://discord.gg/dPUUpBR9DG"><SideItem navSize={navSize} icon={BsDiscord} title="Discord" /></a>
        </Box>
        <Box w="100%">
        <a href="https://www.facebook.com/groups/159748367414882"><SideItem navSize={navSize} icon={BsFacebook} title="Facebook" /></a>
        </Box>
        <Box w="100%">
        <a href="https://www.twitch.tv/era_esports_tv"><SideItem navSize={navSize} icon={BsTwitch} title="Twitch" /></a>
        </Box>
        <Box w="100%">
        <a href="https://www.youtube.com/channel/UCVxuWC1-3LZPbtiozAiHRMg"><SideItem navSize={navSize} icon={BsTwitter} title="Twitter" /></a>
        </Box>
        <Box w="100%">
        <a href="https://www.youtube.com/channel/UCVxuWC1-3LZPbtiozAiHRMg"><SideItem navSize={navSize} icon={AiOutlineYoutube} title="YouTube" /></a>
        </Box>
        <Divider p={1} w="80%" />
        <Box w="100%">
        <a href="https://randymedia.tech"><SideItem navSize={navSize} icon={randymedia} title="Created By" /></a>
        </Box>
        <Box w="100%">
        <a href="https://randymedia.tech"><img src={randymedia} alt="React Logo" /></a>
        </Box>


            
        </Flex>
      
    </Flex>
  );
};
export default SideBar;

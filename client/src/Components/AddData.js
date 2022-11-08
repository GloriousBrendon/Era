import {useState} from 'react';
import { Flex, Button, Box, Heading, Spacer, ButtonGroup, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Center, Input, Select, Spinner, FormLabel, Text } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import addPlayer from '../APIUtils/addPlayer'
import addTeam from '../APIUtils/addTeam'


function AddData({teams}) {

    const [category, setCategory] = useState()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

    const [player, setPlayer] = useState({
                "active": true,
                "name": "",
                "position": "",
                "team": 0
    })

    const [team, setTeam] = useState({
        "active": true,
        "team_name": ""
    })

    function updatePlayerData(e) {
        setPlayer({ ...player, [e.target.id] : e.target.value });
    }

    function updateTeamData(e) {
        setTeam({ ...team, [e.target.id] : e.target.value });
    }

    function savePlayerData() {
        addPlayer(player)
        console.log(player)
    }

    
    function saveTeamData() {
        addTeam(team)
        console.log(team)
    }

    function openModal(category)  {
        setCategory(category)
        onOpen()
      }

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add {category}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Center>
            <form>
            {category === "players" ? 
            <>
            <FormLabel>Name</FormLabel>
            <Input id="name" onChange={updatePlayerData} />
            <FormLabel>Position</FormLabel>
            <Select id="position" onChange={updatePlayerData}>
            {positions.map(p => 
                <option value={p}>{p}</option>
                )}
            </Select>
            <FormLabel>Active</FormLabel>
            <Select id="active" onChange={updatePlayerData}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </Select>
            <FormLabel>Team</FormLabel>
            <Select id="team_id" onChange={updatePlayerData}>
            <option>---</option>
                {teams.map(t => 
                <option value={t.id}>{t.team_name}</option>
                )}
            </Select>
            <Button colorScheme="green" variant="outline" m={4} onClick={savePlayerData}>Save</Button>
            </>
            :
            <>
            <FormLabel>Name</FormLabel>
            <Input id="team_name" onChange={updateTeamData} />
            <FormLabel>Active</FormLabel>
            <Select id="active" onChange={updateTeamData}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </Select>
            <Button colorScheme="green" variant="outline" m={4} onClick={saveTeamData}>Save</Button>
            </>
            }
                
            </form>
        </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

    <Flex alignItems='center' gap='2'>
    <Box p='2'>
        <Heading size='md'>Era Players</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
        <Button colorScheme='teal' onClick={() => {openModal("players")}}>Add Player</Button>
        <Button colorScheme='teal' onClick={() => {openModal("teams")}}>Add Team</Button>
    </ButtonGroup>
    </Flex>
    </>
  );
}

export default AddData;
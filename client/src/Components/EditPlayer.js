import {useEffect, useState} from 'react';
import {
    Center, Input, Select, Spinner, FormLabel, Button, Text, Box,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from "@chakra-ui/react";

function EditPlayer({editId, teams}) {

    const [player, setPlayer] = useState()

    const [resultMessage, setResultMessage] = useState()

    const [editData, setEditData] = useState()

    const positions = ['Top', 'Jungle', 'Mid', 'Bot', 'Supp', 'Sub']

    useEffect(() => {
        if (player !== undefined) {
            setEditData({
                "id": editId,
                "active": player.active,
                "name": player.name,
                "position": player.position,
                "team_id": player.team_id
            })
        }
    },[player])

    console.log(player)

    function updateData(e) {
        setEditData({ ...editData, [e.target.id] : e.target.value });
    }

    function saveEditData() {
        fetch(`http://127.0.0.1:3333/players/${editId}`, {
            method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editData)
        }).then(result => {
            if (result.ok){
            setResultMessage("Saved")
        }
        else {
            setResultMessage("Error" + result.message)
        }})
        .catch(() => setResultMessage("Error"))
    }

    function deleteData() {
        setResultMessage("Are you sure you want to delete?");
    }

    function confirmDelete() {
        fetch(`http://127.0.0.1:3333/players/${editId}`, {
            method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
        }).then(result => {
            if (result.ok){
            setResultMessage("Deleted")
        }
        else {
            setResultMessage("Error" + result.message)
        }})
        .catch(() => setResultMessage("Error"))
    }

    useEffect(() => {
    fetch(`http://127.0.0.1:3333/players/${editId}`, {
      method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then((result) =>result.json())
    .then((data) => setPlayer(data.player))
    },[])

    useEffect(() => {
        console.log(editData)
    },[editData])

    if ((player === undefined) || (editData === undefined))
    return (
        <Spinner />
    ) 
  
    return (
        <>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{player.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        <Center>
            <form>
                <FormLabel>Name</FormLabel>
                <Input id="name" onChange={(e) => updateData(e)} value={editData.name} />
                <FormLabel>Position</FormLabel>
                <Select id="position" onChange={(e) => updateData(e)} value={editData.position}>
                {positions.map(p => 
                    <option value={p}>{p}</option>
                    )}
                </Select>
                <FormLabel>Active</FormLabel>
                <Select id="active" onChange={(e) => updateData(e)} value={editData.active}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </Select>
                <FormLabel>Team</FormLabel>
                <Select id="team_id" onChange={(e) => updateData(e)} value={editData.team_id}>
                    {teams.map(t => 
                    <option value={t.id}>{t.team_name}</option>
                    )}
                </Select>
                <Button colorScheme="green" variant="outline" m={4} onClick={saveEditData}>Save</Button>
                <Button colorScheme="red" variant="outline" m={4} onClick={deleteData}>Delete</Button>
                <Box textAlign="center">
                    <Text color="red">{resultMessage}</Text>
                    {resultMessage === "Are you sure you want to delete?" ?
                    <Button colorScheme="red" variant="outline" m={4} onClick={confirmDelete}>Confirm</Button>
                    :
                    <></>
                    }
                </Box>
                
            </form>
        </Center>
        </ModalBody>
        </ModalContent>
        </>
    );
  };
  export default EditPlayer;
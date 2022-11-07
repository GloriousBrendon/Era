import {useEffect, useState} from 'react';
import {
    Center, Input, Select, Spinner, FormLabel
  } from "@chakra-ui/react";

function EditPlayer({editId, teams}) {

    const [player, setPlayer] = useState()

    const [editData, setEditData] = useState()

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

    function updateData(e) {
        setEditData({ ...editData, [e.target.id] : e.target.value });
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

    if (player === undefined)
    return (
        <Spinner />
    ) 
  
    return (
        <Center>
            <form>
                <FormLabel>Name</FormLabel>
                <Input id="name" onChange={updateData} value={player.name} />
                <FormLabel>Position</FormLabel>
                <Input id="position" onChange={updateData} value={player.position} />
                <FormLabel>Active</FormLabel>
                <Select id="active" onChange={updateData} value={player.active}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </Select>
                <FormLabel>Team</FormLabel>
                <Select id="team_id" onChange={updateData} value={player.active}>
                    {teams.map(t => 
                    <option value={t.id}>{t.team_name}</option>
                    )}
                </Select>
            </form>
        </Center>
    );
  };
  export default EditPlayer;
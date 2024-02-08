import { Container, Center } from "@chakra-ui/react";
import TeamTab from "../Components/TeamTab";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Team({teams, navSize}) {

    const teamName = useParams()

    const [players, setPlayers] = useState([{
        id : 1,
        active: 1,
        name : "SWG Instinction#INT",
        position : "Bot",
        team_id : 1,
        puuid : "1UyjRGYKG3VtMk8gn38dz02IUZYHIC6YOol8oRsCNH_U6ZMgJnpL12M0SbXbXOeaDSK7FZrJdgwFkA"
      }])

  return (
    <>
      <Container maxW='6xl'>
        <TeamTab navSize={navSize} players={players} teamName={teamName} />
      </Container>
    </>
  );
}

export default Team;
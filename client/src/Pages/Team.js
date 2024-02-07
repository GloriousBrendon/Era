import { Container, Center } from "@chakra-ui/react";
import TeamTab from "../Components/TeamTab";
import { useParams } from 'react-router-dom';

function Team({teams}) {

    const teamName = useParams()

  return (
    <>
      <Container maxW='8xl'>
        <TeamTab teamName={teamName} />
      </Container>
    </>
  );
}

export default Team;
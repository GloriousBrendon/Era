import { Container } from "@chakra-ui/react";
import TeamsTab from "../Components/TeamsTab";

function Teams({teams}) {
  return (
    <>
      <Container maxW='8xl'>
        <TeamsTab teams={teams} />
      </Container>
    </>
  );
}

export default Teams;
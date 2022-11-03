import { Container } from "@chakra-ui/react";
import TeamTab from "../Components/TeamTab";

function Teams({teams}) {
  return (
    <>
      <Container maxW='8xl'>
        <TeamTab teams={teams} />
      </Container>
    </>
  );
}

export default Teams;
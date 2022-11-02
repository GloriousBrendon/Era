import {useEffect, useState} from 'react';
import {
    Center, Flex, Heading, Stack, Image
  } from "@chakra-ui/react";
  import getTeamPlayers from '../APIUtils/getTeamPlayers';

function TeamTab({teams}) {

  //http://127.0.0.1:3333/teams

  const [teamData, setTeamData] = useState()

  useEffect(() => {
    for (var teamId=1; teamId <= teams.length; teamId++) {
      fetch(`http://127.0.0.1:3333/teams/${teamId}`, {
        method: "GET",
              headers: {
                  "Content-Type": "application/json"
              }
      })
      .then((result) =>result.json())
      .then((data) => console.log({data}))
    }
  },[])

  useEffect(() => {
    console.log(teamData)
  },[teamData])
  
    return (
        <>
            {teams.map(x => x.active === 1 ? <Flex justifyContent="center" minHeight="50vh">
                    <Heading>{x.team_name}</Heading>
            </Flex>
            :
            <></>)}
        </>
    );
  };
  export default TeamTab;
import {useEffect, useState} from 'react';
import { Center, Heading, FormLabel, Input, Box, Button, InputGroup, InputRightElement, FormControl, Spinner, Stack } from "@chakra-ui/react";
import getPlayers from '../APIUtils/getPlayers';
import getTeams from '../APIUtils/getTeams';
import PlayersTable from '../Components/PlayersTable';
import AddData from '../Components/AddData';
import hero from "../Img/hero.jpg"

function Admin() {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [teams, setTeams] = useState();
    const [players, setPlayers] = useState();

    useEffect(() => {
        getPlayers(setPlayers);
        getTeams(setTeams)
    },[])

function handleSubmit () {
    console.log("Hello")
}

    if ((players === undefined) || (teams === undefined)) {
        return (
            <Center minH="80vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    else return (
        <Center
        bgImage={hero}
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh">
        <Stack>
            <AddData teams={teams} />
            <PlayersTable players={players} teams={teams} />
        </Stack>
        </Center>
    );

//   return (
//     <>
//     <Center justifySelf="center" minH='80vh'>
//         <Box borderRadius={4} bg="red.900" p={4} boxShadow="xl" w="50%">
//             <Heading pb={4} size="3xl">Admin</Heading>
//         <form onSubmit={handleSubmit}>
//         <FormControl>
//             <FormLabel>Username</FormLabel>
//             <Input
//                 type="text"
//                 id="username"
//                 onChange={e => setUserName(e.target.value)}
//                 required/>
//         </FormControl>
//         <FormControl>
//             <FormLabel>Password</FormLabel>
//             <InputGroup>
//                 <Input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     onChange={e => setPassword(e.target.value)}
//                     required
//                 />
//                     <InputRightElement width="4.5rem">
//                         <Button variant='ghost' mt="0.5rem" h="2rem" size="sm" onClick={handleShowClick}>
//                         {showPassword ? "Hide" : "Show"}
//                         </Button>
//                     </InputRightElement>
//             </InputGroup>
//             </FormControl>
//             <Button mt={5} type="submit">Log in</Button>
//         </form>
//         </Box>
//     </Center>
//     </>
//   );
}

export default Admin;
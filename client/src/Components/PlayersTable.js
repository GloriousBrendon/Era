import {useEffect, useState} from 'react';
import {
    Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Modal,
  } from "@chakra-ui/react";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import { useDisclosure } from '@chakra-ui/react'
import EditPlayer from './EditPlayer';

function PlayersTable({players, teams}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ editId, setEditId ] = useState()

    function openModal(id)  {
        setEditId(id)
        onOpen()
      }
  
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <EditPlayer teams={teams} editId={editId} />
      </Modal>

        <TableContainer>
            <Table variant='striped' colorScheme='red'>
                <TableCaption>Era players</TableCaption>
                <Thead>
                <Tr>
                    <Th isNumeric>ID</Th>
                    <Th>Name</Th>
                    <Th>Position</Th>
                    <Th>Created</Th>
                    <Th>Updated</Th>
                    <Th>Team</Th>
                    <Th>Active</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                {players.map(p => (
                    <Tr>
                        <Td isNumeric>{p.id}</Td>
                        <Td>{p.name}</Td>
                        <Td>{p.position}</Td>
                        <Td><SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{p.created_at}</SimpleDateTime></Td>
                        <Td><SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{p.updated_at}</SimpleDateTime></Td>
                        {teams.map(t =>(
                            p.team_id === t.id ?
                            <Td>{t.team_name}</Td>
                            :
                            <Td></Td>
                        ))}
                        {p.active === 0 ? 
                        <Td>No</Td>
                        : 
                        <Td>Yes</Td>
                        }
                        <Td><Button onClick={() => {openModal(p.id)}} colorScheme="yellow" variant="outline">Edit</Button></Td>
                        <Td><Button colorScheme="red" variant="outline">Delete</Button></Td>
                    </Tr>
                ))}
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th isNumeric>ID</Th>
                    <Th>Name</Th>
                    <Th>Position</Th>
                    <Th>Created</Th>
                    <Th>Updated</Th>
                    <Th>Team</Th>
                    <Th>Active</Th>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
        </>
    );
  };
  export default PlayersTable;
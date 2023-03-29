import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from '@chakra-ui/react';

const BookingUI = () => {
  const [issued, setIssued] = React.useState(false);
  const handleIssued = () => {
    setIssued(!issued);
  };
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      overflow={'hidden'}
      scrollBehavior={'smooth'}
      my={'40px'}
    >
      <VStack justifyContent="flex-start" alignItems="start">
        <Box m="9">
          <Text fontSize="3xl" fontWeight="light" fontFamily="Popins">
            Booking Log
          </Text>
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>S.N</Th>
              <Th>Book Name</Th>
              <Th>Author</Th>
              <Th>Genre</Th>
              <Th>Booissuedked by</Th>
              <Th>Booked Date</Th>
              <Th>Issued</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Harry Potter and Order of Phoenix</Td>
              <Td>JK Rowling</Td>
              <Td>Action</Td>
              <Td>Amrit Budathoki</Td>
              <Td>29/03/2023</Td>
              <Td bg={issued ? 'green' : 'red'}>{issued ? 'True' : 'False'}</Td>
              <Td>
                <Button onClick={handleIssued}>Issued</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default BookingUI;

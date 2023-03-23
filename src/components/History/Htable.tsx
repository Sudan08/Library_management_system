import React from 'react';
import { Box, Text, Table, Tr, Th, Thead, VStack } from '@chakra-ui/react';

const Htable = () => {
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
          <Text fontSize="3xl" fontWeight="light" fontFamily="Popins" font>
            History
          </Text>
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Book Name</Th>
              <Th>Author</Th>
              <Th>Genre</Th>
              <Th>Taken Date</Th>
              <Th>Return Date</Th>
              <Th>Return Status</Th>
            </Tr>
          </Thead>
        </Table>
      </VStack>
    </Box>
  );
};

export default Htable;

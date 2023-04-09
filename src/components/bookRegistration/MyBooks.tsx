import React, { useEffect } from 'react';
import { Flex, Text, VStack, Box } from '@chakra-ui/react';
import BookCard from '../bookRegistration/BookCard';

const MyBooks = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/books', {});
  });
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      my={'40px'}
      overflow={'scroll'}
      maxH={'90%'}
    >
      <VStack m={'9'} justifyContent={'start'} alignItems={'start'} gap={'9'}>
        <Box>
          <Text fontSize="3xl" fontWeight="light" fontFamily="Popins">
            My Books
          </Text>
        </Box>
        <BookCard />
      </VStack>
    </Box>
  );
};

export default MyBooks;

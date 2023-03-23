import React from 'react';
import { Box, HStack, Flex, VStack, Text, Input } from '@chakra-ui/react';
import BookCard from './BookCard';

const Content = () => {
  const Books = [
    {
      src: 'https://images.unsplash.com/photo-1679465186081-24f2f37a806f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'This',
      desc: 'This is a book',
    },
    {
      src: 'https://images.unsplash.com/photo-1679465186081-24f2f37a806f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'This',
      desc: 'This is a book',
    },
    {
      src: 'https://images.unsplash.com/photo-1679465186081-24f2f37a806f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'This',
      desc: 'This is a book',
    },
  ];

  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      overflow={'hidden'}
      scrollBehavior={'smooth'}
      my={'40px'}
    >
      <VStack width="full" justifyContent="flex-start" alignItems="flex-start">
        <Box m="4" p="4">
          <Input placeholder="Search" />
        </Box>
        <VStack m="4" p="4">
          <Text>Romance</Text>
          <HStack gap="4" justifyContent="space-around">
            {Books.map((book, index) => (
              <BookCard
                key={index}
                src={book.src}
                title={book.title}
                desc={book.desc}
              ></BookCard>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Content;

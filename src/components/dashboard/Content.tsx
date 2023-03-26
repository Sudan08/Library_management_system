import React from 'react';
import {
  Box,
  HStack,
  Flex,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Button,
} from '@chakra-ui/react';
import BookCard from './BookCard';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';

const Content = () => {
  const scope = useAppSelector((state) => state.auth.scope);
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
      my={'40px'}
      overflow={'scroll'}
      maxH={'90%'}
    >
      <VStack width="full" justifyContent="flex-start" alignItems="flex-start">
        <HStack width="300px" alignSelf="flex-end" p={4} m={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
            >
              <Icon as={BsSearch} />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          {scope === 'admin' ? (
            <Box>
              <Button bg="brand.500">Add Book</Button>
            </Box>
          ) : null}
        </HStack>
        <VStack m="4" p="4" gap="5" alignItems="flex-start" maxWidth={'40vw'}>
          <Text mx="5">Romance</Text>
          <HStack gap="4" justifyContent="space-around" overflow="scroll">
            {Books.map((book, index) => (
              <BookCard
                key={index}
                src={book.src}
                title={book.title}
                desc={book.desc}
                overflow="scroll"
              ></BookCard>
            ))}
          </HStack>
        </VStack>
        <VStack m="4" p="4" gap="5" alignItems="flex-start">
          <Text mx="5">Romance</Text>
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
        <VStack m="4" p="4" gap="5" alignItems="flex-start">
          <Text mx="5">Romance</Text>
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
        <VStack m="4" p="4" gap="5" alignItems="flex-start">
          <Text mx="5">Romance</Text>
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

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
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import BookCard from './BookCard';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';
import RegisterUI from '../bookRegistration/RegisterUI';
import { useGetBooksQuery } from '../../books/bookApiSlice';

const Content = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scope = useAppSelector((state) => state.auth.scope);
  const { data, isLoading, error } = useGetBooksQuery();

  const getBooks = isLoading ? [] : data.books;
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
              <RegisterUI />
            </Box>
          ) : null}
        </HStack>
        <VStack m="4" p="4" gap="5" alignItems="flex-start" maxWidth={'40vw'}>
          <Text mx="5">Romance</Text>
          <HStack gap="4" justifyContent="space-around">
            {getBooks.map((book, index) => (
              <BookCard
                key={index}
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                author={book.author}
                genre={book.genre}
              ></BookCard>
            ))}
          </HStack>
        </VStack>
        <VStack m="4" p="4" gap="5" alignItems="flex-start">
          <Text mx="5">Romance</Text>
          <HStack gap="4" justifyContent="space-around">
            {getBooks.map((book, index) => (
              <BookCard
                key={index}
                src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                title={book.title}
                author={book.author}
                genre={book.genre}
              ></BookCard>
            ))}
          </HStack>
        </VStack>
        <VStack m="4" p="4" gap="5" alignItems="flex-start">
          <Text mx="5">Romance</Text>
          <HStack gap="4" justifyContent="space-around">
            {getBooks.map((book, index) => (
              <BookCard
                key={index}
                src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                title={book.title}
                author={book.author}
                genre={book.genre}
              ></BookCard>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Content;

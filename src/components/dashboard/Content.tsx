import React, { useEffect } from 'react';
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
import BookCard from '../bookRegistration/BookCard';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';
import RegisterUI from '../bookRegistration/RegisterUI';
import { useGetBooksQuery } from '../../books/bookApiSlice';
import { addBook } from '../../books/bookSlice';

const Content = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scope = useAppSelector((state) => state.auth.scope);
  const getBooks = useAppSelector((state) => state.books.allBooks.books);
  if (getBooks === undefined) return <div>loading</div>;
  const filteredBooks = getBooks.slice(0, 6);

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
        <HStack width="full" justifyContent="space-between" p={4} m={4}>
          <Box>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              Books
            </Text>
          </Box>
          <HStack>
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
                <RegisterUI action={'add'} />
              </Box>
            ) : null}
          </HStack>
        </HStack>

        <>
          <VStack m="4" p="4" gap="5" alignItems="flex-start" maxWidth={'40vw'}>
            <HStack justifyContent={'space-between'} m={'5'} width={'65vw'}>
              <Text mx="5" fontSize={'2xl'}>
                Romance
              </Text>
              <Text>See more:</Text>
            </HStack>
            <HStack gap="4" justifyContent="space-around">
              {filteredBooks?.map((book, index) => (
                <BookCard
                  key={index}
                  bookId={book._id}
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
              {filteredBooks?.map((book, index) => (
                <BookCard
                  key={index}
                  bookId={book._id}
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
              {filteredBooks?.map((book, index) => (
                <BookCard
                  key={index}
                  bookId={book._id}
                  src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                  title={book.title}
                  author={book.author}
                  genre={book.genre}
                ></BookCard>
              ))}
            </HStack>
          </VStack>
        </>
      </VStack>
    </Box>
  );
};

export default Content;

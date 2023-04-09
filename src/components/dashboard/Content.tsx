import React, { useMemo, useEffect } from 'react';
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

const Content = () => {
  const scope = useAppSelector((state) => state?.auth?.scope);
  const getBooks = useAppSelector((state) => state.books.allBooks.books);
  const filteredBooks = useMemo(() => {
    return getBooks?.slice(0, 6);
  }, [getBooks]);
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
            <InputGroup
              boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
            >
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
                  src={book?.src}
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
                  src={book?.src}
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
                  src={book?.src}
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

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
  Image,
} from '@chakra-ui/react';
import BookCard from '../bookRegistration/BookCard';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';
import RegisterUI from '../bookRegistration/RegisterUI';
import useFilterBooks from '../../customhooks/useFilteredBooks.ts';

const Content = () => {
  const scope = useAppSelector((state) => state?.auth?.scope);
  const books = useFilterBooks();
  console.log(books);
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

        <VStack m="4" p="4" gap="5" alignItems="flex-start">
          <Text mx="5">Romance</Text>
          {Object.entries(books)?.map((book, index) => (
            <VStack key={index} m="4" p="4" gap="5" alignItems="flex-start">
              <Text>
                {book[0]?.charAt(0).toUpperCase() + book[0]?.slice(1)}
              </Text>
              <HStack gap="4" justifyContent="space-around">
                {book[1]?.length > 0 ? (
                  book[1]?.map((item, index) => (
                    <BookCard
                      key={index}
                      bookId={item?._id}
                      src={item?.src}
                      title={item?.title}
                      author={item?.author}
                      genre={item?.genre}
                    ></BookCard>
                  ))
                ) : (
                  <Box
                    backgroundImage={
                      'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1681220602~exp=1681221202~hmac=03ed39a3eeff4e2cb1395982b6b005c763fcfab60e4544fe8fac2356dec7fd5c'
                    }
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height={'500px'}
                    width={'200px'}
                  ></Box>
                )}
              </HStack>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Content;

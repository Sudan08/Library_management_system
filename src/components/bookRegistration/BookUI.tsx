import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';
import { useParams } from 'react-router-dom';

const BookUI = () => {
  const book = useAppSelector((state) => state.books.allBooks.books);
  const bookid = useParams();
  const [thisbook] = book.filter((book) => book._id === bookid.id);
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
        </HStack>

        <>
          <HStack
            m="4"
            p="4"
            gap="5"
            justifyContent="flex-start"
            alignItems={'start'}
            maxWidth={'full'}
            width={'full'}
          >
            <Box m={'5'} p={'5'}>
              <Image
                src="https://images.unsplash.com/photo-1565292266983-74457d481f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="#"
                height={['10rem', '15rem', '30rem']}
              ></Image>
            </Box>
            <Box m={'5'} p={'5'}>
              <VStack justifyContent={'start'} alignItems={'start'}>
                <Text fontSize={'5xl'} fontWeight={'900'}>
                  Title : {thisbook.title}
                </Text>
                <Text fontSize={'3xl'} fontWeight={'500'}>
                  Author : {thisbook.author}
                </Text>
                <HStack gap={'5'}>
                  <Text fontSize={'1xl'} fontWeight={'500'}>
                    Genre :
                  </Text>
                  <Box boxShadow="outline" p="3" rounded={'md'} bg={'red.400'}>
                    {thisbook.genre}
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </HStack>
        </>
      </VStack>
    </Box>
  );
};

export default BookUI;

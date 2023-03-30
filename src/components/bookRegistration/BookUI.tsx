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
  useToast,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';
import { useParams } from 'react-router-dom';
import { BsTrash3Fill } from 'react-icons/bs';
import { MdUpdate } from 'react-icons/md';
import { useDeleteBookMutation } from '../../books/bookApiSlice';
import { useNavigate } from 'react-router-dom';
import RegisterUI from '../bookRegistration/RegisterUI';

const BookUI = () => {
  const book = useAppSelector((state) => state.books.allBooks.books);
  const { _userId, userName } = useAppSelector((state) => state?.auth);
  const { scope } = JSON.parse(localStorage.getItem('authdata'));
  if (book && _userId === undefined) return <div>loading</div>;
  const bookid = useParams();

  const toast = useToast();
  const navigate = useNavigate();
  const [thisbook] = book.filter((book) => book._id === bookid.id);
  const [deleteData] = useDeleteBookMutation();
  const date = new Date().toLocaleDateString();

  const handleDelete = async () => {
    try {
      if (bookid) {
        const res = await deleteData(bookid.id);
        console.log(res);
        if (res.data.status === 200) {
          toast({
            title: 'Book deleted',
            description: 'Book deleted successfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          navigate('/admin/books');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleBook = () => {
    try {
      fetch('http://localhost:8000/booking/api/v1/postbooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId: bookid.id,
          userId: _userId,
          userName: userName,
          title: thisbook.title,
          author: thisbook.author,
          bookedDate: date,
          isIssued: false,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            toast({
              title: 'Book booked',
              description: 'Book booked successfully',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
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
          <VStack
            m={'5'}
            p={'5'}
            justifyContent={'space-between'}
            gap={'10'}
            minHeight={'30vh'}
            maxHeight={'70vh'}
            height={'55vh'}
          >
            <VStack justifyContent={'start'} alignItems={'start'}>
              <Text fontSize={'5xl'} fontWeight={'900'}>
                Title : {thisbook?.title}
              </Text>
              <Text fontSize={'3xl'} fontWeight={'500'}>
                Author : {thisbook?.author}
              </Text>
              <HStack gap={'5'}>
                <Text fontSize={'1xl'} fontWeight={'500'}>
                  Genre :
                </Text>
                <Box boxShadow="md" p="3" rounded={'md'} bg={'red.400'}>
                  {thisbook?.genre}
                </Box>
              </HStack>
              <Text fontSize={'1xl'} fontWeight={'500'}>
                {thisbook?.description}
              </Text>
            </VStack>
            <VStack
              justifyContent={'start'}
              alignItems={'start'}
              gap={'9'}
              width={'full'}
            >
              <HStack
                gap={'5'}
                justifyContent={'start'}
                alignItems={'start'}
                width={'full'}
              >
                <Text fontSize={'1xl'} fontWeight={'500'}>
                  Booked :
                </Text>
                <Box boxShadow="md" p="3" rounded={'md'} bg={'red.400'}>
                  {thisbook.booked === false ? 'False' : 'True'}
                </Box>
              </HStack>
              <HStack
                justifyContent={'start'}
                alignItems={'start'}
                width={'full'}
                gap={'8'}
              >
                {scope === 'user' ? (
                  <Button
                    leftIcon={<BsTrash3Fill />}
                    colorScheme={'red'}
                    onClick={handleBook}
                  >
                    Book now
                  </Button>
                ) : (
                  <>
                    <RegisterUI action={'update'} book={thisbook} />
                    <Button
                      leftIcon={<BsTrash3Fill />}
                      colorScheme={'red'}
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </HStack>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default BookUI;

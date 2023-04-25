import React, { useMemo } from 'react';
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
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useAppSelector } from '../../store/store';
import { useParams } from 'react-router-dom';
import { BsTrash3Fill } from 'react-icons/bs';
import { BsBookmarkFill } from 'react-icons/bs';
import {
  useDeleteBookMutation,
  usePatchBookMutation,
  useUpdateBookMutation,
} from '../../slice/api/books/bookApiSlice';
import { useNavigate } from 'react-router-dom';
import RegisterUI from '../bookRegistration/RegisterUI';
import { IBookState, ILoginResponse } from '../../interface';

const BookUI = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { scope } = JSON.parse(localStorage.getItem('authdata') || '{}');
  const bookid = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const { _userId, userName } =
    useAppSelector<ILoginResponse>((state) => state?.auth) || {};
  const { allBooks } = useAppSelector<IBookState>((state) => state?.books);
  const thisbook = useMemo(() => {
    return allBooks.books?.filter((item) => item._id === bookid.id);
  }, [allBooks]);
  const [deleteData] = useDeleteBookMutation();
  const date = new Date().toISOString().split('T')[0];

  const [updateBooking] = usePatchBookMutation();

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

  const handleBook = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/booking/api/v1/postbooking/${_userId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bookId: bookid.id,
            userId: _userId,
            userName: userName,
            title: thisbook[0].title,
            author: thisbook[0].author,
            bookedDate: date,
            isIssued: false,
            scope: scope,
          }),
        }
      );

      if (response?.status === 200) {
        toast({
          title: 'Book booked',
          description: 'Book booked successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        await updateBooking({
          bookId: bookid.id,
          booked: true,
        });
      } else {
        toast({
          title: 'Booking limit reached',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleBookingDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/booking/api/v1/deletebooking/${thisbook[0]._id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        toast({
          title: 'Booking deleted',
          description: 'Booking deleted successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        await updateBooking({
          bookId: bookid.id,
          booked: false,
        });
      } else if (response.status === 500) {
        toast({
          title: 'Something went wrong',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
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
    >
      {thisbook === undefined ? (
        <Spinner />
      ) : (
        <VStack
          width="full"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
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
                src={thisbook[0]?.src}
                alt="#"
                maxHeight={['10rem', '15rem', '30rem']}
                maxWidth={['5rem', '7rem', '15rem']}
                object-fit="cover"
              />
            </Box>
            <VStack
              m={'5'}
              p={'5'}
              justifyContent={'space-between'}
              gap={'10'}
              minHeight={'30vh'}
              height={'55vh'}
            >
              <VStack justifyContent={'start'} alignItems={'start'}>
                <Text fontSize={'5xl'} fontWeight={'900'}>
                  Title : {thisbook[0]?.title}
                </Text>
                <Text fontSize={'3xl'} fontWeight={'500'}>
                  Author : {thisbook[0]?.author}
                </Text>
                <HStack gap={'5'}>
                  <Text fontSize={'1xl'} fontWeight={'500'}>
                    Genre :
                  </Text>
                  <Box boxShadow="md" p="3" rounded={'md'} bg={'red.400'}>
                    {thisbook[0]?.genre}
                  </Box>
                </HStack>
                <Text fontSize={'1xl'} fontWeight={'500'}>
                  {thisbook[0]?.description}
                </Text>
              </VStack>
              <VStack
                justifyContent={'start'}
                alignItems={'start'}
                gap={'9'}
                width={'full'}
                py={'9'}
              >
                <HStack
                  gap={'5'}
                  justifyContent={'start'}
                  alignItems={'center'}
                  width={'full'}
                >
                  <Text fontSize={'1xl'} fontWeight={'500'}>
                    Booked :
                  </Text>
                  <Box boxShadow="md" p="3" rounded={'md'} bg={'red.400'}>
                    {thisbook[0].booked === false ? 'False' : 'True'}
                  </Box>
                </HStack>
                <HStack
                  justifyContent={'start'}
                  alignItems={'start'}
                  width={'full'}
                  gap={'8'}
                  m={'5'}
                >
                  {scope === 'user' && thisbook[0].booked == false ? (
                    <Button
                      leftIcon={<BsBookmarkFill />}
                      onClick={onOpen}
                      bg={'brand.500'}
                      color={'white'}
                      _hover={{ bg: 'brand.600', color: 'black' }}
                    >
                      Book now
                    </Button>
                  ) : scope === 'user' && thisbook[0].booked == true ? (
                    <>
                      <Button
                        leftIcon={<BsTrash3Fill />}
                        colorScheme={'red'}
                        onClick={handleBookingDelete}
                      >
                        Delete Booking
                      </Button>
                    </>
                  ) : (
                    <>
                      <RegisterUI action={'update'} book={thisbook[0]} />
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
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book this?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              leftIcon={<BsBookmarkFill />}
              onClick={handleBook}
              bg={'brand.500'}
              color={'white'}
              _hover={{ bg: 'brand.600', color: 'black' }}
            >
              Book now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BookUI;

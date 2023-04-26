import React, { useEffect } from 'react';
import { Box, HStack, VStack, Image, Text, Spinner } from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { useParams } from 'react-router-dom';
import { useGetBookingsQuery } from '../../slice/api/booking/bookingApiSlice';
import { IBook } from '../../interface';

const BookedBooks = () => {
  const { data, isLoading } = useGetBookingsQuery(null);
  const { _userId } = useAppSelector((state) => state?.auth);
  const { id: bookID } = useParams();
  const {
    allBooks: { books },
  } = useAppSelector((state) => state?.books);
  const bookDetails = books?.filter((item: IBook) => item._id === bookID);
  const thisbook = data?.fineData.filter((item: any) => item.bookId === bookID);
  console.log(thisbook);
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
                src={bookDetails[0]?.src}
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
                  Title : {bookDetails[0]?.title}
                </Text>
                <Text fontSize={'3xl'} fontWeight={'500'}>
                  Author : {bookDetails[0]?.author}
                </Text>
                <HStack gap={'5'}>
                  <Text fontSize={'1xl'} fontWeight={'500'}>
                    Genre :
                  </Text>
                  <Box boxShadow="md" p="3" rounded={'md'} bg={'red.400'}>
                    {bookDetails[0]?.genre}
                  </Box>
                </HStack>

                <Text fontSize={'1xl'} fontWeight={'500'}>
                  Issued : {thisbook[0]?.isIssued ? 'Yes' : 'No'}
                </Text>
                <Text color={'brand.500'} fontSize={'1xl'} fontWeight={'500'}>
                  Booked Date : {thisbook[0]?.bookedDate.split('T')[0]}
                </Text>
                <Text color={'red.500'} fontSize={'1xl'} fontWeight={'500'}>
                  Return Date :{thisbook[0]?.returnDate.split('T')[0]}
                </Text>
                <Text fontSize={'1xl'} fontWeight={'500'}>
                  {bookDetails[0]?.description}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default BookedBooks;

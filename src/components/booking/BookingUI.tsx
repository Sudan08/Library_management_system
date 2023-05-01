import React, { useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  IconButton,
  useToast,
} from '@chakra-ui/react';

import { BsTrash3Fill } from 'react-icons/bs';

import {
  useGetBookingsQuery,
  useUpdateBookingsMutation,
} from '../../slice/api/booking/bookingApiSlice';

import { usePatchBookMutation } from '../../slice/api/books/bookApiSlice';

import { useDeleteBookingsMutation } from '../../slice/api/booking/bookingApiSlice';

const BookingUI = () => {
  const [updateBook] = usePatchBookMutation();
  const toast = useToast();
  const [bookingdelete] = useDeleteBookingsMutation();
  const { data: bookingData } = useGetBookingsQuery(null);
  const [update] = useUpdateBookingsMutation();
  const handleIssued = (_id: string) => {
    const res = update(_id);
  };
  const handleDelete =
    ([bookingId, bookId]) =>
    async () => {
      const res = await bookingdelete(bookingId);
      if (res.data.status === 200) {
        toast({
          title: 'Booking Deleted',
          description: 'Booking Deleted Successfully',
          status: 'success',
          duration: 3000,
        });
        await updateBook({
          bookId: bookId,
          booked: false,
        });
      } else {
        toast({
          title: 'Something went wrong',
          description: 'Booking Not Deleted',
          status: 'error',
        });
      }
    };
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      height={'80vh'}
      overflow={'auto'}
      scrollBehavior={'smooth'}
      my={'40px'}
    >
      <VStack justifyContent="flex-start" alignItems="start" width="full">
        <Box m="9">
          <Text fontSize="3xl" fontWeight="light" fontFamily="Popins">
            Booking Log
          </Text>
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>S.N</Th>
              <Th>Book Name</Th>
              <Th>Author</Th>
              <Th>Booked by</Th>
              <Th>Booked Date</Th>
              <Th>Return Date</Th>
              <Th>Fine</Th>
              <Th>Issued</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookingData?.fineData.map((data: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{data.title}</Td>
                  <Td>{data.author}</Td>
                  <Td>{data.userName}</Td>
                  <Td>{data.bookedDate.split('T')[0]}</Td>
                  <Td>{data.returnDate.split('T')[0]}</Td>
                  <Td color="red">Rs:{data.fine}</Td>
                  <Td bg={data.isIssued ? 'green' : 'red'}>
                    {data.isIssued ? 'True' : 'False'}
                  </Td>
                  <Td>
                    <Button onClick={() => handleIssued(data._id)}>
                      Issued
                    </Button>
                  </Td>
                  <Td>
                    <IconButton
                      aria-label="Delete"
                      colorScheme={'red'}
                      icon={<BsTrash3Fill />}
                      onClick={handleDelete([data?._id, data?.bookId])}
                    ></IconButton>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default BookingUI;

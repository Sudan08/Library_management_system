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
} from '@chakra-ui/react';

import {
  useGetBookingsQuery,
  useUpdateBookingsMutation,
} from '../../slice/api/booking/bookingApiSlice';

type BookingData = {
  title: string;
  author: string;
  userName: string;
  bookedDate: string;
  isIssued: boolean;
  returnDate: string;
};

const BookingUI = () => {
  const { data: bookingData } = useGetBookingsQuery(null);
  const [update] = useUpdateBookingsMutation();
  const handleIssued = (_id: string) => {
    const res = update(_id);
    console.log(res);
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

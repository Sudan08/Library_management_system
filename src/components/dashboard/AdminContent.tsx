import React, { useState } from 'react';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { useGetBookingsQuery } from '../../slice/api/booking/bookingApiSlice';
import { useEffect } from 'react';

const AdminContent = () => {
  const { data: bookingData } = useGetBookingsQuery(null);
  const [users, setUsers] = useState({});
  const books = useAppSelector((state) => state.books.allBooks.books);
  useEffect(() => {
    fetch('http://localhost:8000/users/api/v1/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      my={'40px'}
      maxH={'90%'}
    >
      <VStack
        justifyContent="start"
        alignItems={'start'}
        margin={'4'}
        overflow={'scroll'}
        w={'full'}
      >
        <Text margin={'5'} fontSize={'3xl'} fontWeight={'bold'}>
          Admin Dashboard
        </Text>
        <HStack justifyContent="space-around" alignItems="center" w={'full'}>
          <VStack justifyContent="center" alignItems="center" gap="10" p={'10'}>
            <Text fontSize={'2xl'}>Total Number of Books:</Text>
            <Text fontSize={'8xl'} fontWeight={'extrabold'}>
              {books?.length || 0}
            </Text>
          </VStack>
          <VStack justifyContent="center" alignItems="center" gap="10" p={'10'}>
            <Text fontSize={'2xl'}>Total Number of Bookings</Text>
            <Text fontSize={'8xl'} fontWeight={'extrabold'}>
              {bookingData?.fineData.length}
            </Text>
          </VStack>
        </HStack>
        <VStack
          justifyContent="center"
          alignItems="center"
          gap="10"
          p={'10'}
          w={'full'}
        >
          <Text fontSize={'2xl'} textAlign={'center'}>
            Total number of Users:
          </Text>
          <Text fontSize={'8xl'} fontWeight={'extrabold'} textAlign={'center'}>
            {users?.data || 0}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AdminContent;

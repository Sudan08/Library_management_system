import React, { useEffect } from 'react';
import { Flex, Text, VStack, Box, Spinner, HStack } from '@chakra-ui/react';
import BookCard from './BookCard';
import { useAppSelector } from '../../store/store';
import { IBook, ILoginResponse } from '../../interface';
import { IBookState } from '../../interface';
import { useGetMyBooksQuery } from '../../slice/api/mybook/myBookApiSlice';

const MyBooks = () => {
  const { _userId } = useAppSelector<ILoginResponse>((state) => state?.auth);
  const { data, isLoading } = useGetMyBooksQuery(_userId);
  const { allBooks } = useAppSelector<IBookState>((state) => state?.books);
  const userBooks = allBooks?.books?.filter(
    (item: IBook) =>
      item._id === data?.bookIds[0] || item._id === data?.bookIds[1]
  );
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      my={'40px'}
      overflow={'scroll'}
      maxH={'90%'}
    >
      <VStack m={'9'} justifyContent={'start'} alignItems={'start'} gap={'9'}>
        <Box>
          <Text fontSize="3xl" fontWeight="500">
            My Books
          </Text>
        </Box>
        <HStack>
          {isLoading ? (
            <Spinner size={'xl'} />
          ) : userBooks?.length === 0 ? (
            <Text>No book has been booked yet.</Text>
          ) : (
            userBooks?.map((item: IBook, index: number) => (
              <BookCard
                key={index}
                bookId={item?._id}
                src={item?.src}
                title={item?.title}
                author={item?.author}
                genre={item?.genre}
                desc={item?.description}
                _userId={_userId}
              />
            ))
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default MyBooks;

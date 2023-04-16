import React, { useEffect } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { useGetBooksQuery } from '../books/bookApiSlice';
import { addBook } from '../books/bookSlice';
import { login } from '../auth/authSlice';

const Layout = () => {
  const dispatch = useAppDispatch();
  const authdata = JSON.parse(localStorage.getItem('authdata') as string);

  const { data: allbooks } = useGetBooksQuery(null);
  console.log(allbooks);
  useEffect(() => {
    if (allbooks) {
      dispatch(addBook(allbooks));
    }
  }, [allbooks]);

  useEffect(() => {
    if (authdata) {
      dispatch(login(authdata));
    }
  }, [authdata]);

  return (
    <Box width={'100vw'} height={'100vh'}>
      <Grid
        templateAreas={`"navbar navbar navbar navbar navbar"
          "sidebar content content content content"
          "sidebar content content content content"
          "sidebar content content content content"
          "sidebar content content content content"
          `}
        templateRows={'10vh 1fr 1fr 1fr 1fr'}
        templateColumns={'3fr 3fr 3fr 3fr 3fr'}
        width={'100vw'}
        height={'100vh'}
      >
        <GridItem area={'navbar'}>
          <Navbar />
        </GridItem>
        <GridItem area={'sidebar'}>
          <Sidebar />
        </GridItem>
        <GridItem area={'content'}>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Layout;

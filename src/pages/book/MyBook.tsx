import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import MyBooks from '../../components/bookRegistration/MyBooks';

const Book = () => {
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
          <MyBooks />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Book;

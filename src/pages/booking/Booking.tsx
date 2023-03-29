import React from 'react';
import Sidebar from '../../components/Sidebar';
import {
  Box,
  HStack,
  VStack,
  Input,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import BookingUI from '../../components/booking/BookingUI';

const Booking = () => {
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
          <BookingUI />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Booking;

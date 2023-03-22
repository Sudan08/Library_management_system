import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import {
  Box,
  HStack,
  VStack,
  Input,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Navbar from '../../components/dashboard/Navbar';
import BookCard from '../../components/dashboard/BookCard';
import Content from '../../components/dashboard/Content';

const Dashboard = () => {
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
          <Content />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;

import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import { Box, HStack, VStack } from '@chakra-ui/react';
import RegisterUI from '../../components/bookRegistration/RegisterUI';
import Navbar from '../../components/dashboard/Navbar';

const Dashboard = () => {
  return (
    <>
      <Box height={'100vh'} width={'100vw'}>
        <Sidebar />
      </Box>
    </>
  );
};

export default Dashboard;

import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import {Box, HStack} from '@chakra-ui/react';
import RegisterUI from '../../components/bookRegistration/RegisterUI';

const Dashboard = () => {
  return (
    <>
    <Box height={'100vh'} width={'100vw'}>
    <HStack>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <RegisterUI />
        
      </Box>
    </HStack>
    </Box>
    </>
  )
}

export default Dashboard
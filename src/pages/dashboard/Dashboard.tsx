import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import {Box, HStack} from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <>
    <Box height={'100vh'} width={'100vw'}>
    <HStack>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        {/* <Sample /> */}
      </Box>
    </HStack>
    </Box>
    </>
  )
}

export default Dashboard
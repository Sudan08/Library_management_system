import React from 'react';
import Sidebar from '../../components/Sidebar';
import {Box} from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <>
    <Sidebar />
    {/* <Box height={'100vh'} width={'100vh'} display={"flex"} justifyContent={'center'} alignItems={'center'}> */}
        <h1>Dashboard</h1>
    {/* </Box> */}
    </>
  )
}

export default Dashboard
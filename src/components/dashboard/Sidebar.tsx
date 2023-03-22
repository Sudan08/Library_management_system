import React from 'react';
import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      position={'fixed'}
      left={'0px'}
      maxW={'18vw'}
      maxH={'100vh'}
      height={'100vh'}
      width={'15vw'}
      boxShadow={
        'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;'
      }
    >
      <VStack
        justifyContent={'space-around'}
        alignItems={'center'}
        p={10}
        gap={10}
        height={'100vh'}
      >
        <Box display={'flex'}>
          <Text>Sudan Shakya</Text>
        </Box>
        <Box>
          <VStack justifyContent={'around'} alignItems={'center'} gap={'10'}>
            <NavLink width={'12vw'} to={'/dashboard'}>
              <Button>Home</Button>
            </NavLink>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </VStack>
        </Box>
        <Box></Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;

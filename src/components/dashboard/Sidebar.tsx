import React from 'react';
import { Box, VStack, Text, Button, Icon } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
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
            <NavLink to={'/dashboard'}>
              <Button
                leftIcon={<AiOutlineHome />}
                bg={isActive('/dashboard') ? 'brand.800' : 'brand.100'}
                color="white"
              >
                Home
              </Button>
            </NavLink>
            <NavLink to={'/history'}>
              <Button
                leftIcon={<AiOutlineHistory />}
                bg={isActive('/history') ? 'brand.800' : 'brand.100'}
                width={['3rem', '6rem', '8rem']}
              >
                History
              </Button>
            </NavLink>
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

const SidebarItems = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: <Icon />,
  },
  {
    name: 'History',
    path: '/history',
    icon: <Icon />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <Icon />,
  },
  {},
];

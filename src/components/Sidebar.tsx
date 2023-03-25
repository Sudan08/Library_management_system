import React from 'react';
import { Box, VStack, Text, Button, Icon } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      zIndex={'10'}
    >
      <VStack
        justifyContent={'start'}
        alignItems={'center'}
        p={10}
        gap={10}
        height={'100vh'}
      >
        <Icon as={IoLibraryOutline} boxSize="20" />
        <Text fontSize={'3xl'}>Sudan Shakya</Text>

        <Box>
          <VStack justifyContent={'around'} alignItems={'center'} gap={'10'}>
            {SidebarItems.map((item, index) => {
              return (
                <NavLink to={item.path} key={index}>
                  <Button
                    leftIcon={item.icon}
                    bg={isActive(item.path) ? 'brand.500' : 'brand.100'}
                  >
                    {item.name}
                  </Button>
                </NavLink>
              );
            })}

            <Button
              leftIcon={<AiOutlineHistory />}
              bg={isActive('#') ? 'brand.500' : 'brand.100'}
              width={['3rem', '6rem', '8rem']}
              onClick={() => {
                navigate('/');
                localStorage.removeItem('token');
              }}
            >
              Log Out
            </Button>
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
    icon: <AiOutlineHome />,
  },
  {
    name: 'History',
    path: '/history:id',
    icon: <AiOutlineHistory />,
  },
  {
    name: 'My Books',
    path: '/myBooks:id',
    icon: <Icon />,
  },
  {
    name: 'Log Out',
    path: '/logout',
    icon: <Icon />,
  },
];

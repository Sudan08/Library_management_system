import React from 'react';
import { Box, VStack, Text, Button, Icon } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scope = useAppSelector((state) => state.auth.scope);
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
        justifyContent={'space-between'}
        alignItems={'center'}
        p={10}
        gap={10}
        height={'100vh'}
      >
        <VStack display={'flex'} justifyContent={'space-around'} gap={'10'}>
          <Icon as={IoLibraryOutline} boxSize="20" />
          <Text fontSize={'3xl'}>Sudan Shakya</Text>
        </VStack>

        <Box>
          <VStack justifyContent={'around'} alignItems={'center'} gap={'10'}>
            {scope === 'admin'
              ? SidebarAdminItems.map((item, index) => {
                  return (
                    <NavLink to={item.path} key={index}>
                      <Button
                        py={10}
                        leftIcon={item.icon}
                        bg={isActive(item.path) ? 'brand.500' : 'brand.300'}
                        _hover={{ bg: 'brand.400' }}
                        width={['3rem', '6rem', '8rem', '10rem', '14rem']}
                      >
                        {item.name}
                      </Button>
                    </NavLink>
                  );
                })
              : SidebarUserItems.map((item, index) => {
                  return (
                    <NavLink to={item.path} key={index}>
                      <Button
                        py={10}
                        leftIcon={item.icon}
                        bg={isActive(item.path) ? 'brand.500' : 'brand.300'}
                        _hover={{ bg: 'brand.400' }}
                        width={['3rem', '6rem', '8rem', '10rem', '14rem']}
                      >
                        {item.name}
                      </Button>
                    </NavLink>
                  );
                })}

            <Button
              leftIcon={<AiOutlineHistory />}
              bg={isActive('#') ? 'brand.500' : 'brand.300'}
              width={['3rem', '6rem', '8rem', '10rem', '14rem']}
              py={10}
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

const SidebarUserItems = [
  {
    name: 'Home',
    path: '/home',
    icon: <AiOutlineHome />,
  },
  {
    name: 'History',
    path: '/history:id',
    icon: <AiOutlineHistory />,
  },
  {
    name: 'My Books',
    path: '/books/:id',
    icon: <Icon />,
  },
];

const SidebarAdminItems = [
  {
    name: 'Home',
    path: '/admin',
    icon: <AiOutlineHome />,
  },
  {
    name: 'Books',
    path: '/admin/books',
    icon: <AiOutlineHistory />,
  },
  {
    name: 'Users',
    path: '/admin/books/:id',
    icon: <Icon />,
  },
];

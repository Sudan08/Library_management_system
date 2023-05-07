import React from 'react';
import { Box, VStack, Text, Button, Icon, HStack } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLibraryOutline, IoBook } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { SiBookstack } from 'react-icons/si';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { RiChatHistoryFill } from 'react-icons/ri';

const Sidebar = () => {
  const location = useLocation();
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
      overflowY={'scroll'}
    >
      <VStack
        justifyContent={'start'}
        alignItems={'center'}
        p={10}
        gap={24}
        height={'100vh'}
      >
        <VStack display={'flex'} justifyContent={'space-around'} gap={'10'}>
          <Icon as={IoLibraryOutline} boxSize="20" />
          <Text fontSize={'3xl'} fontWeight={'900'}>
            Library Management System
          </Text>
        </VStack>

        <Box>
          <VStack justifyContent={'around'} alignItems={'center'} gap={'10'}>
            {scope === 'admin' || scope === 'superadmin'
              ? SidebarAdminItems.map((item, index) => {
                  return (
                    <NavLink to={item.path} key={index}>
                      <Button
                        py={7}
                        leftIcon={item.icon}
                        bg={isActive(item.path) ? 'brand.500' : 'white'}
                        color={isActive(item.path) ? 'white' : 'black'}
                        _hover={{ bg: 'brand.200' }}
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
                        py={7}
                        leftIcon={item.icon}
                        bg={isActive(item.path) ? 'brand.500' : 'white'}
                        color={isActive(item.path) ? 'white' : 'black'}
                        _hover={{ bg: 'brand.700' }}
                        width={['3rem', '6rem', '8rem', '10rem', '14rem']}
                      >
                        {item.name}
                      </Button>
                    </NavLink>
                  );
                })}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;

const SidebarUserItems = [
  {
    name: 'Home',
    path: '/home',
    icon: <Icon as={SiBookstack} h={'8'} w={'8'} mr={'8'} />,
  },
  {
    name: 'My Books',
    path: '/mybooks',
    icon: <Icon as={IoBook} h={'8'} w={'8'} mr={'8'} />,
  },
];

const SidebarAdminItems = [
  {
    name: 'Home',
    path: '/admin',
    icon: <Icon as={AiFillHome} h={'8'} w={'8'} mr={'8'} />,
  },
  {
    name: 'Books',
    path: '/admin/books',
    icon: <Icon as={SiBookstack} h={'8'} w={'8'} mr={'8'} />,
  },
  {
    name: 'Booking Logs',
    path: '/admin/bookings',
    icon: <Icon as={BsFillBookmarkCheckFill} h={'8'} w={'8'} mr={'8'} />,
  },
];

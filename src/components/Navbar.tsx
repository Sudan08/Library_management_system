import React from 'react';
import { Box, HStack, Icon, Text, Image } from '@chakra-ui/react';
import { GrNotification } from 'react-icons/gr';

const Navbar = () => {
  return (
    <Box
      width={'100vw'}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
    >
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'inherit'}
      >
        <Box p={'10px'} m={'10px'}>
          <Image
            src="/images/hck_ing_group_logo.png"
            alt="herald_logo"
            maxH={'50px'}
            maxw={'50px'}
          />
        </Box>
        <Box p={'10px'} m={'10px'}>
          <HStack gap="10" justifyContent="space-between" mr="40px">
            <Icon as={GrNotification} w="6" h="6" />
            <Icon />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;

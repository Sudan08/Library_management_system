import React from 'react';
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Box width={'100vw'} boxShadow={'rgba(17, 17, 26, 0.1) 0px 1px 0px'}>
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'inherit'}
      >
        <Box p={'10px'} m={'10px'}>
          <HStack>
            <Icon />
            <Text>Herald College Kathmandu</Text>
          </HStack>
        </Box>
        <Box p={'10px'} m={'10px'}>
          <HStack>
            <Icon />
            <Icon />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;

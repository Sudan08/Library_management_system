import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  Image,
  Select,
  Menu,
  Avatar,
  AvatarBadge,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useColorMode } from '@chakra-ui/react';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      width={'100vw'}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      position={'fixed'}
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
          />
        </Box>
        <Box p={'10px'} m={'10px'}>
          <HStack gap="10" justifyContent="space-between" mr="40px">
            <Icon as={GrNotification} w="6" h="6" />
            <Icon
              as={
                colorMode === 'light' ? MdOutlineDarkMode : MdOutlineLightMode
              }
              onClick={toggleColorMode}
              w="6"
              h="6"
            />
            <Menu>
              <MenuButton>
                <Avatar
                  name="Elon Musk"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                >
                  <AvatarBadge bg="brand.500" />
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Setting</MenuItem>
                <MenuItem>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;

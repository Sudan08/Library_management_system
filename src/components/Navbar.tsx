import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Addteacher from './teacher/Addteacher';
import {
  Box,
  HStack,
  Image,
  Menu,
  Avatar,
  AvatarBadge,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  console.log(modal);
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
                <MenuItem
                  display={'flex'}
                  flexDirection={'row'}
                  gap={'5'}
                  onClick={() => setModal(true)}
                >
                  <AiOutlineUserAdd size={24} />
                  Add Teacher
                </MenuItem>
                <MenuItem
                  display={'flex'}
                  flexDirection={'row'}
                  gap={'5'}
                  onClick={() => {
                    navigate('/');
                    localStorage.removeItem('token');
                  }}
                >
                  <BiLogOut size={24}></BiLogOut>
                  LogOut
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </HStack>
      {modal === true ? <Addteacher modal={modal} setModal={setModal} /> : null}
    </Box>
  );
};

export default Navbar;

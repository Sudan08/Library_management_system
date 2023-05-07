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
import { useAppSelector } from '../store/store';

const Navbar = () => {
  const { scope, userName } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
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
            <Menu z-Index={'20'}>
              <MenuButton>
                <Avatar name={userName}>
                  <AvatarBadge bg="brand.500" />
                </Avatar>
              </MenuButton>
              <MenuList>
                {scope === 'admin' || scope === 'superadmin' ? (
                  <MenuItem
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'5'}
                    onClick={() => setModal(true)}
                  >
                    <AiOutlineUserAdd size={24} />
                    Add Teacher
                  </MenuItem>
                ) : null}
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

import { Box, HStack, VStack, Text } from '@chakra-ui/react';

const AdminContent = () => {
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      my={'40px'}
      maxH={'90%'}
    >
      <VStack
        justifyContent="start"
        alignItems={'start'}
        margin={'4'}
        overflow={'scroll'}
        w={'full'}
      >
        <Text margin={'5'} fontSize={'3xl'} fontWeight={'bold'}>
          Admin Dashboard
        </Text>
        <HStack justifyContent="space-around" alignItems="center" w={'full'}>
          <VStack
            justifyContent="center"
            alignItems="center"
            gap="10"
            // m={'10'}
            p={'10'}
          >
            <Text fontSize={'2xl'}>Total Number of Books:</Text>
            <Text fontSize={'8xl'} fontWeight={'extrabold'}>
              7
            </Text>
          </VStack>
          <VStack
            justifyContent="center"
            alignItems="center"
            gap="10"
            // m={'10'}
            p={'10'}
          >
            <Text fontSize={'2xl'}>Total Number of Bookings</Text>
            <Text fontSize={'8xl'} fontWeight={'extrabold'}>
              7
            </Text>
          </VStack>
        </HStack>
        <Box
          justifyContent="center"
          alignItems="center"
          gap="10"
          // m={'10'}
          p={'10'}
          w={'full'}
        >
          <Text fontSize={'2xl'} textAlign={'center'}>
            Total number of Users:
          </Text>
          <Text fontSize={'8xl'} fontWeight={'extrabold'} textAlign={'center'}>
            7
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AdminContent;

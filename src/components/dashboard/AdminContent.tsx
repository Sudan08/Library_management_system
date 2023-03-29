import React from 'react';
import {
  Box,
  HStack,
  Flex,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AdminContent = () => {
  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      my={'40px'}
      maxH={'90%'}
      overflow={'scroll'}
    >
      <VStack justifyContent="start" alignItems={'start'} margin={'4'}>
        <Text margin={'5'} fontSize={'3xl'} fontWeight={'bold'}>
          Admin Dashboard
        </Text>
        <HStack justifyContent="flex-start" alignItems="start">
          <VStack
            justifyContent="flex-start"
            alignItems="start"
            gap="10"
            m={'10'}
            p={'10'}
          >
            <Text>Books</Text>
            <Box height={'40vh'} width={'40vw'}>
              <ResponsiveContainer>
                <AreaChart
                  width={400}
                  height={300}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </VStack>
          <VStack
            justifyContent="flex-start"
            alignItems={'flex-start'}
            m={'10'}
            p={'10'}
            gap={'5'}
          >
            <Text>Users</Text>
            <Box height={'30vh'} width={'20vw'}>
              <ResponsiveContainer>
                <AreaChart
                  width={400}
                  height={300}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AdminContent;

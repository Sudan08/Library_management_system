import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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

const data2 = [
  {
    subject: 'Romance',
    A: 1,
  },
  {
    subject: 'Non-fiction',
    A: 1,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
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
            <Text>Genre</Text>
            <Box height={'30vh'} width={'20vw'}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#orange"
                    fill="orange"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AdminContent;

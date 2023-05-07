import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';

type BookCardProps = {
  src: string;
  title: string;
  desc: string;
  bookId: string;
  author: string;
  genre: string | string[];
  _userId: string | undefined;
};

const BookCard = (data: BookCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scope = useAppSelector((state) => state?.auth?.scope);
  const handleClick = () => {
    if (scope === 'admin' || scope === 'superadmin') {
      navigate(`/admin/books/${data.bookId}`);
    } else if (location.pathname === '/mybooks') {
      navigate(`/mybooks/${data.bookId}`);
    } else {
      navigate(`/home/books/${data.bookId}`);
    }
  };
  return (
    <>
      <Card
        maxHeight={'550px'}
        minWidth={'200px'}
        height={'550px'}
        width={'200px'}
      >
        <CardBody maxH={'450px'}>
          <Image
            src={data.src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text fontSize="xl" fontWeight={'600'}>
              {data.title}
            </Text>
            <Text color="blackAlpha.700">{data.author}</Text>
            <Text color="blackAlpha.500">{data.genre}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            bg="brand.500"
            width="full"
            color="white"
            onClick={handleClick}
            _hover={{ bg: 'brand.700' }}
          >
            View
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookCard;

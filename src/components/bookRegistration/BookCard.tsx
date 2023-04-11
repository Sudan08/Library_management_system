import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { useNavigate } from 'react-router-dom';

type BookCardProps = {
  src: string;
  title: string;
  desc: string;
  bookId: string;
};

const BookCard = (data: BookCardProps) => {
  const navigate = useNavigate();
  const scope = useAppSelector((state) => state?.auth?.scope);
  const handleClick = () => {
    if (scope === 'admin') {
      navigate(`/admin/books/${data.bookId}`);
    } else {
      navigate(`books/${data.bookId}`);
    }
  };
  return (
    <>
      <Card height={'500px'} width={'200px'}>
        <CardBody>
          <Image
            src={data.src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.title}</Heading>
            <Text>{data.author}</Text>
            <Text>{data.genre}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button bg="brand.500" width="full" onClick={handleClick}>
            View
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookCard;

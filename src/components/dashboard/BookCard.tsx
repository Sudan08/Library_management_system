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

type BookCardProps = {
  src: string;
  title: string;
  desc: string;
};

const BookCard = (data: BookCardProps) => {
  const scope = useAppSelector((state) => state.auth.scope);
  console.log(scope);
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
            <Text>{data.desc}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {scope === 'admin' ? (
            <Button bg="brand.500" width="full">
              View
            </Button>
          ) : (
            <ButtonGroup>
              <Button variant="solid" bg="brand.500">
                Book Now
              </Button>
            </ButtonGroup>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default BookCard;

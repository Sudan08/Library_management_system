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

const BookCard = ({ src, title, desc }) => {
  console.log(src);
  console.log('Helllo');
  return (
    <>
      <Card height={'500px'} width={'200px'}>
        <CardBody>
          <Image
            src={src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{desc}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Book Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookCard;

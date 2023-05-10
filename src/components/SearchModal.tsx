import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Button,
  Input,
  Text,
  HStack,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/hooks';
import BookCard from './bookRegistration/BookCard';

const SearchModal = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');
  const filterData = props?.allbooks?.filter((item: any) => {
    return item.title.includes(search);
  });

  return (
    <>
      <IconButton
        aria-label="search"
        colorScheme="gray"
        size={'md'}
        icon={<BsSearch />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e) => setSearch(e.target.value)} />
            <HStack width={'100%'} overflowX="scroll" gap={'9'}>
              {search.length > 0 ? (
                filterData?.map((item: any, index: number) => {
                  return (
                    <BookCard
                      key={index}
                      bookId={item?._id}
                      src={item?.src}
                      title={item?.title}
                      author={item?.author}
                      genre={item?.genre}
                      desc={item?.description}
                      _userId={item?._userId}
                      onClose={onClose}
                    />
                  );
                })
              ) : (
                <Text fontSize={'3xl'} my={'5'}>
                  {' '}
                  Search for the book
                </Text>
              )}
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const DeleteModal = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <></>;
};
export { DeleteModal, SearchModal };

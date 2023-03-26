import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/react';
import React from 'react';

import { useForm } from 'react-hook-form';
import { IBookRegister } from '../../interface';

const RegisterUI = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IBookRegister>();
  const { onClose, onOpen, isOpen } = useDisclosure();
  const onSubmit = (data: IBookRegister) => {
    console.log(data);
  };
  return (
    <>
      <Button bg="brand.500" onClick={onOpen}>
        Add Book
      </Button>
      <Modal isOpen={isOpen} size={['md', 'lg', 'xl']} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl isInvalid={Boolean(errors.title)}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  placeholder="Title"
                  id="title"
                  {...register('title', {
                    required: 'This is required',
                  })}
                />

                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.genre)}>
                <FormLabel htmlFor="genre">Genre</FormLabel>
                <Input
                  placeholder="Genre"
                  id="genre"
                  {...register('genre', {
                    required: 'This is required',
                  })}
                />

                <FormErrorMessage>
                  {errors.genre && errors.genre.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.author)}>
                <FormLabel htmlFor="author">Author</FormLabel>
                <Input
                  placeholder="Author"
                  id="author"
                  {...register('author', {
                    required: 'This is required',
                  })}
                />

                <FormErrorMessage>
                  {errors.author && errors.author.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button bg="brand.500" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterUI;

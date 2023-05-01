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
  useToast,
  HStack,
  Textarea,
  Switch,
  Select,
  Box,
  Icon,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import { IBookRegister } from '../../interface';
import {
  useCreateBookMutation,
  useUpdateBookMutation,
} from '../../slice/api/books/bookApiSlice';
import { useAppDispatch } from '../../store/store';
import { useParams } from 'react-router-dom';

const RegisterUI = ({ action, book }) => {
  // using react router dom hooks
  const { id } = useParams();
  // using post and update mutation from the bookApiSlice
  const [postBook] = useCreateBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const toast = useToast();
  // using react hook form to handle form data
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IBookRegister>();
  const dispatch = useAppDispatch();
  // using chakra ui hooks
  const { onClose, onOpen, isOpen } = useDisclosure();
  const createBook = async (values: IBookRegister) => {
    try {
      const Imgdata = new FormData();
      Imgdata.append('file', values.src[0]);
      Imgdata.append('upload_preset', 'kkokk0pi');
      Imgdata.append('cloud_name', 'dhd9bmxlj');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dhd9bmxlj/image/upload',
        {
          method: 'POST',
          body: Imgdata,
        }
      );
      const res_data = await res.json();
      values.src = res_data.url;
      // using unwrap to get the data from the mutation
      const data = await postBook(values).unwrap();
      if (data) {
        // dispatching the data to the store
        dispatch({ type: 'books/createBook', payload: data });
        toast({
          description: 'Adding Book',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        onClose;
      }
    } catch (err) {
      toast({
        title: 'Failed',
        description: 'Please check your credentials',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const editBook = async (values: IBookRegister) => {
    try {
      values._id = id;
      const data = await updateBook(values).unwrap();
      if (data) {
        dispatch({ type: 'books/createBook', payload: data });
        toast({
          description: 'Updating Book',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        onClose;
      }
    } catch (err) {
      console.log(err);
      toast({
        title: 'Failed',
        description: 'Please check your credentials',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button bg="brand.500" onClick={onOpen}>
        {action === 'add' ? 'Add Book' : 'Edit Book'}
      </Button>
      <Modal isOpen={isOpen} size={['md', 'lg', 'xl']} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {action === 'add' ? 'Add Book' : 'Update Book'}
          </ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={
              action === 'add'
                ? handleSubmit(createBook)
                : handleSubmit(editBook)
            }
          >
            <ModalBody>
              <FormControl>
                <Input type="file" {...register('src')} />
              </FormControl>
              <FormControl isInvalid={Boolean(errors.title)}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  placeholder="Title"
                  id="title"
                  {...register('title', {
                    required: 'This is required',
                    value: action === 'update' ? book.title : '',
                  })}
                />

                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.genre)}>
                <FormLabel htmlFor="genre">Genre</FormLabel>
                <Select
                  id="genre"
                  {...register('genre', {
                    required: 'This is required',
                    value: action === 'update' ? book.genre : '',
                  })}
                >
                  <option selected disabled>
                    Select one
                  </option>
                  <option value="Fiction"> Fiction</option>
                  <option value="Non-Fiction"> Non-Fiction</option>
                  <option value="Romance"> Romance</option>
                  <option value="Mystery"> Mystery</option>
                  <option value="Thriller"> Thriller</option>
                  <option value="Fantasy"> Fantasy</option>
                  <option value="Science Fiction"> Science Fiction</option>
                  <option value="Horror"> Horror</option>
                </Select>
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
                    value: action === 'update' ? book.author : null,
                  })}
                />

                <FormErrorMessage>
                  {errors.author && errors.author.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.description)}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  id="description"
                  {...register('description', {
                    required: 'This is required',
                    value: action === 'update' ? book.description : '',
                  })}
                />

                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.booked)}>
                <FormLabel htmlFor="booked">Booked</FormLabel>
                <Switch
                  id="bookded"
                  {...register('booked', {
                    value: action === 'update' ? book.bookded : false,
                  })}
                />

                <FormErrorMessage>
                  {errors.booked && errors.booked.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button bg="brand.500" type="submit">
                {action === 'add' ? 'Submit' : 'Update'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterUI;

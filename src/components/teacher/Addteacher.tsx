import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import { AddTeacher } from '../../interface';
import { useForm } from 'react-hook-form';
import { useAddTeacherMutation } from '../../slice/api/auth/authApiSlice';

const Addteacher = ({ modal, setModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [addTeacher] = useAddTeacherMutation();
  const createTeacher = async (values: AddTeacher) => {
    try {
      const res = await addTeacher(values).unwrap();
      console.log(res);
      if (res && res.savedTeacher) {
        toast({
          title: 'Teacher Added Successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setModal(false);
        onClose();
      }
    } catch (err) {
      toast({
        title: 'Failed',
        description: 'Please check your credentials',
        status: 'error',
        duration: 5000,
      });
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddTeacher>();
  useEffect(() => {
    if (modal === true) {
      onOpen();
    }
  }, [modal]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        size={['md', 'lg', 'xl']}
        onClose={() => {
          onClose();
          setModal(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Teacher</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(createTeacher)}>
            <ModalBody>
              <HStack>
                <FormControl isInvalid={Boolean(errors.firstName)}>
                  <FormLabel htmlFor="FirstName">First Name</FormLabel>
                  <Input
                    placeholder="FirstName"
                    id="FirstName"
                    {...register('firstName', {
                      required: 'This is required',
                    })}
                  />

                  <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={Boolean(errors.lastName)}>
                  <FormLabel htmlFor="lastName">LastName</FormLabel>
                  <Input
                    placeholder="LastName"
                    id="lastName"
                    {...register('lastName', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.lastName && errors.lastName.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <FormControl isInvalid={Boolean(errors.userName)}>
                <FormLabel htmlFor="userName">UserName</FormLabel>
                <Input
                  placeholder="Username"
                  id="userName"
                  {...register('userName', {
                    required: 'This is required',
                  })}
                />

                <FormErrorMessage>
                  {errors.userName && errors.userName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.email)}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.password)}>
                <FormLabel htmlFor="passoword">Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button bg="brand.500" type="submit">
                Add Teacher
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Addteacher;

import React, { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  IconButton,
  useToast,
  ModalFooter,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { BsTrash3Fill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import {
  useGetBookingsQuery,
  useUpdateBookingsMutation,
} from '../../slice/api/booking/bookingApiSlice';

import { usePatchBookMutation } from '../../slice/api/books/bookApiSlice';

import { useDeleteBookingsMutation } from '../../slice/api/booking/bookingApiSlice';
import { useAppSelector } from '../../store/store';

interface Fine {
  fine: number;
  _id: string;
}

const BookingUI = () => {
  const { scope } = useAppSelector((state) => state?.auth);
  console.log(scope);
  const [updateBook] = usePatchBookMutation();
  const toast = useToast();
  const [bookingdelete] = useDeleteBookingsMutation();
  const { data: bookingData } = useGetBookingsQuery(null);
  const [update] = useUpdateBookingsMutation();
  const handleIssued = (_id: string) => {
    update({ id: _id, data: { issued: true } });
  };
  const handleDelete =
    ([bookingId, bookId]) =>
    async () => {
      const res = await bookingdelete(bookingId);
      if (res.data.status === 200) {
        toast({
          title: 'Booking Deleted',
          description: 'Booking Deleted Successfully',
          status: 'success',
          duration: 3000,
        });
        await updateBook({
          bookId: bookId,
          booked: false,
        });
      } else {
        toast({
          title: 'Something went wrong',
          description: 'Booking Not Deleted',
          status: 'error',
        });
      }
    };

  return (
    <Box
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      maxWidth={'95%'}
      width={'95%'}
      height={'80vh'}
      overflow={'auto'}
      scrollBehavior={'smooth'}
      my={'40px'}
    >
      <VStack justifyContent="flex-start" alignItems="start" width="full">
        <Box m="9">
          <Text fontSize="3xl" fontWeight="light" fontFamily="Popins">
            Booking Log
          </Text>
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>S.N</Th>
              <Th>Book Name</Th>
              <Th>Author</Th>
              <Th>Booked by</Th>
              <Th>Booked Date</Th>
              <Th>Return Date</Th>
              <Th>Fine</Th>
              <Th>Issued</Th>
              <Th>Change Issue</Th>
              <Th>Delete</Th>
              {scope === 'superadmin' && <Th>Change Fine</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {bookingData?.fineData.map((data: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{data.title}</Td>
                  <Td>{data.author}</Td>
                  <Td>{data.userName}</Td>
                  <Td>{data.bookedDate.split('T')[0]}</Td>
                  <Td>{data.returnDate.split('T')[0]}</Td>
                  <Td color="red">Rs:{data.fine}</Td>
                  <Td bg={data.isIssued ? 'green' : 'red'}>
                    {data.isIssued ? 'True' : 'False'}
                  </Td>
                  <Td>
                    <Button onClick={() => handleIssued(data._id)}>
                      Issued
                    </Button>
                  </Td>
                  {scope === 'superadmin' && (
                    <Td>
                      <IconButton
                        aria-label="Delete"
                        colorScheme={'red'}
                        icon={<BsTrash3Fill />}
                        onClick={handleDelete([data?._id, data?.bookId])}
                      ></IconButton>
                    </Td>
                  )}
                  <Td>
                    <ModalForm _id={data._id} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

const ModalForm = ({ _id }) => {
  const [update] = useUpdateBookingsMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Fine>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const updateFine = (values: Fine) => {
    update({ id: _id, data: { fine: values.fine, isUpdated: true } });
  };
  return (
    <>
      <IconButton
        aria-label="ChangeFine"
        colorScheme={'red'}
        icon={<FiEdit />}
        onClick={onOpen}
      ></IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Fine</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(updateFine)}>
              <FormControl isInvalid={errors.fine}>
                <FormLabel htmlFor="fine">Fine</FormLabel>
                <Input hidden value={_id} {...register('id')} />
                <Input
                  id="fine"
                  placeholder="Fine"
                  {...register('fine', {
                    required: 'Fine is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.fine && errors.fine.message}
                </FormErrorMessage>
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Change Fine
              </Button>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingUI;

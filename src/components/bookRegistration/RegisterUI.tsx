import { Box ,FormControl,HStack ,VStack , FormLabel , FormErrorMessage ,Input } from '@chakra-ui/react'
import React from 'react'
import { chakra } from '@chakra-ui/react';


const RegisterUI = () => {
  return (
    <Box>
      <h1>Hello world</h1>
        <HStack>
            <Box>
              
            </Box>
            <Box>
                <VStack>
                    <chakra.form>
                    <FormControl >
                      <FormLabel htmlFor="email">Title</FormLabel>
                      <Input
                        placeholder="Title"
                        id="email"
                        type="email"
                        // {...register('email', {
                        //   required: 'Email is required',
                        //   pattern: {
                        //     value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        //     message: 'Invalid Title'
                        //   },
                        // })}
                      />
                        {/* <FormErrorMessage>
                        {errors.email && errors.email.message}
                        </FormErrorMessage> */}
                        </FormControl>
                    </chakra.form>
                </VStack>
            </Box>  
        </HStack>
    </Box>
    
  )
}

export default RegisterUI
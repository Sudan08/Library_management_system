import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
  } from '@chakra-ui/react';
  import React  from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { loginPayLoad } from '../../interface';

  
  const Login:React.FC= ()=> {
    const  {register ,handleSubmit , watch , formState : {errors}} = useForm();
    const handleLogin = (data: loginPayLoad) => {

    }

    const 
    return (
        <Box>
          <Flex
            minH={'100vh'}
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack align={'center'}>
                      <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                      <Text fontSize={'lg'} color={'gray.600'}>
                          to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                      </Text>
                  </Stack>
                  <Box
                      rounded={'lg'}
                      bg={useColorModeValue('white', 'gray.700')}
                      boxShadow={'lg'}
                      p={8}>
                      <Stack spacing={4}>
                      <chakra.form>
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
                            message: 'Invalid email address'
                          },
                        })}
                      />
                        <FormErrorMessage>
                        {/* {errors.email && errors.email.message} */}
                        </FormErrorMessage>
                        </FormControl>
                          <FormControl isInvalid={Boolean(errors.password)}>
                              <FormLabel htmlFor='passoword'>Password</FormLabel>
                              <Input 
                                type="password"
                                placeholder= "Password"
                                id="password"
                                {...register('password', {
                                  required: 'Password is required',
                                  minLength: {
                                    value: 8,
                                    message: 'Password must have at least 8 characters'
                                  },
                                })}/>
                          </FormControl>
                          <Stack spacing={10}>
                              <Stack
                                  direction={{ base: 'column', sm: 'row' }}
                                  align={'start'}
                                  justify={'space-between'}>
                                  <Checkbox>Remember me</Checkbox>
                                  <Link color={'blue.400'}>Forgot password?</Link>
                              </Stack>
                              <Button
                                  bg={'blue.400'}
                                  color={'white'}
                                  _hover={{
                                      bg: 'blue.500',
                                  }}
                                  >
                                  Sign in
                              </Button>
                          </Stack>
                        </chakra.form>
                      </Stack>
                      
                  </Box>
              </Stack>
          </Flex>
          </Box>
    )
    }

  export default Login;

import { Box, Flex, Heading, Text, Link, Stack, Button, FormControl, FormLabel, FormErrorMessage, Input, useColorModeValue, chakra, HStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { registerPayLoad } from '../../interface';

const Register:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<registerPayLoad>();
  const handleRegister = (data: registerPayLoad) => {
    data.scope = "user";
    console.log(data);
    fetch("http://localhost:4000/users/api/v1/signup",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  };

  return (
    <Box>
        <Flex
            minH={'100vh'}
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack align={'center'}>
                      <Heading fontSize={'4xl'}>Create an Account</Heading>
                  </Stack>
                  <Box
                      rounded={'lg'}
                      bg={useColorModeValue('white', 'gray.700')}
                      boxShadow={'lg'}
                      p={8}>
                      <Stack spacing={4}>
                      <chakra.form
                      onSubmit={handleSubmit(handleRegister)}
                      flexDirection= {'column'}
                      gap={4}
                      >
                       <HStack>   
                      <FormControl isInvalid={Boolean(errors.firstName)}>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        placeholder="First Name"
                        id="firstName"
                        type="firstName"
                        {...register('firstName', {
                          required: 'Firstname is required',
                        })}
                      />
                        <FormErrorMessage>
                        {errors.firstName && errors.firstName.message}
                        </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={Boolean(errors.lastName)}>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        placeholder="Last Name"
                        id="lastName"
                        type="lastName"
                        {...register('lastName', {
                          required: 'Lastname is required',
                        })}
                      />
                        <FormErrorMessage>
                        {errors.lastName && errors.lastName.message}
                        </FormErrorMessage>
                        </FormControl>
                        </HStack>

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
                        {errors.email && errors.email.message}
                        </FormErrorMessage>
                        </FormControl>

                      <FormControl isInvalid={Boolean(errors.userName)}>
                      <FormLabel htmlFor="userName">Username</FormLabel>
                      <Input
                        placeholder="Username"
                        id="userName"
                        type="userName"
                        {...register('userName', {
                          required: 'Username is required',
                        })}
                      />
                        <FormErrorMessage>
                        {errors.userName && errors.userName.message}
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
                          <FormErrorMessage>
                          {errors.password && errors.password.message}  
                          </FormErrorMessage>
                          </FormControl>
                          <Stack spacing={10}>
                              <Button
                                  bg={'green.400'}
                                  color={'white'}
                                  _hover={{
                                      bg: 'green.500',
                                  }}
                                  type = "submit"
                                  >
                                  Register
                              </Button>
                              <Box display={"flex"} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={5} >
                                <Box height={0} width={'full'} border={'1px solid black'}></Box>
                                <Text>OR</Text>
                                <Box height={0} width={'full'} border={'1px solid black'}></Box>
                              </Box>
                              <Link 
                              bg={'blue.400'}
                              color={'white'}
                              _hover={
                                  {
                                      bg: 'blue.500',
                                  }
                              }
                              as = {Button}
                              href = "/"
                              >
                                Login
                              </Link>
                          </Stack>
                        </chakra.form>
                      </Stack>
                      
                  </Box>
              </Stack>
          </Flex>
    </Box>
  )
}

export default Register
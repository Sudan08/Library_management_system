import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
  } from '@chakra-ui/react';
  import React  from 'react';
  import { chakra } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Form, Link } from 'react-router-dom';
import { loginPayLoad } from '../../interface';
import { useNavigate } from 'react-router-dom';

  
  const Login:React.FC= ()=> {
    const navigate = useNavigate();
    const  {register , handleSubmit , watch , formState : {errors}} = useForm<loginPayLoad>();
    const handleLogin = (data: loginPayLoad) => {
    data.scope = "user";
    fetch("http://localhost:4000/users/api/v1/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status == 200){
        navigate('/dashboard');
      }
      else{
        console.log(data);
        alert(data.message);
      }
    })
    }
    
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
                  </Stack>
                  <Box
                      rounded={'lg'}
                      bg={useColorModeValue('white', 'gray.700')}
                      boxShadow={'lg'}
                      p={8}>
                      <Stack spacing={4}>
                      <chakra.form
                      onSubmit={handleSubmit(handleLogin)}>
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
                              <Stack
                                  direction={{ base: 'column', sm: 'row' }}
                                  align={'start'}
                                  justify={'space-between'}>
                                  {/* <FormControl> */}
                                  <Checkbox
                                  {
                                    ...register('rememberMe')
                                  }>Remember me</Checkbox>
                                  {/* </FormControl> */}
                              </Stack>
                              <Button
                                  bg={'blue.400'}
                                  color={'white'}
                                  _hover={{
                                      bg: 'blue.500',
                                  }}
                                  type = "submit"
                                  >
                                  Sign in
                              </Button>
                              <Box display={"flex"} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={5} >
                                <Box height={0} width={'full'} border={'1px solid black'}></Box>
                                <Text>OR</Text>
                                <Box height={0} width={'full'} border={'1px solid black'}></Box>
                              </Box>
                              <Link
                              to = '/register'>
                              <Button 
                              bg={'green.400'}
                              color={'white'}
                              _hover={
                                  {
                                      bg: 'green.500',
                                  }
                              }
                              width={'full'}
                              >
                                Register
                              </Button>
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

  export default Login;
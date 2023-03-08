import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from './pages/Login/Login';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
    return(
        <>
        <ChakraProvider>
        <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
        </ChakraProvider>
        </>
    
    )
}

export default App
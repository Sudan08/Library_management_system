import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from './pages/Login/Login';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/Login/Register';

const App = () => {
    return(
        <>
        <ChakraProvider>
        <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/dashboard"} element={<Dashboard />}></Route>
        </Routes>
        </BrowserRouter>
        </ChakraProvider>
        </>
    
    )
}

export default App
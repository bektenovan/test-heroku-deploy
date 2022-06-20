import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProductsList from './components/ProductsList'
import ProductsDetails from './components/ProductsDetails';
import EditProducstForm from './components/EditProductsForm';
import Card from './components/Card';

const Routing = () => {
    return (
        // <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/addProduct' element={<AddProductForm/>}/>
            <Route path='/products' element={<ProductsList/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/products/:id' element={<ProductsDetails/>}/>
            <Route path='/edit/:id' element={<EditProducstForm />}/>
            <Route path='/cart' element={<Card/>}/>
            <Route ></Route>


        </Routes>
        // </BrowserRouter>
            
        
    );
};

export default Routing;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthContextProvider from './contexts/authContext';
import CardContextProvider from './contexts/cardContext';
import ProductsContextProvider from './contexts/productsContext';
import Routing from './Routing';



function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider> 
        <CardContextProvider>
          <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
      </BrowserRouter>
      </CardContextProvider>
      </ProductsContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;

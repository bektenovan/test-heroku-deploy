import { Identity } from '@mui/base';
import { Box, Breadcrumbs, Container, Link, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../contexts/productsContext';
import CircularProgress from '@mui/material/CircularProgress';
import Loader from './Loader';




const ProductsDetails = () => {
    const { getOneProduct, oneProduct } = useContext(productsContext)
    const { id } = useParams()

    useEffect(() => {
        getOneProduct(id)
    }, [])

    // console.log(oneProduct);
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Shop
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/products"
                >
                    Products
                </Link>
                <Typography color="text.primary">Details</Typography>
            </Breadcrumbs>
            {oneProduct ? <Box display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} paddingTop={"50px"}><Paper style={{ width: "40%" }} elevation={3}><img src={oneProduct.image} width="100%" alt="product"></img></Paper>

                <Typography variant='h5'>{oneProduct.title}</Typography>
                <Typography variant='h6'>{oneProduct.description}</Typography>
                <Typography variant='h5'>{oneProduct.price}</Typography>


            </Box> : <Loader />}


        </Container>
    );
};

export default ProductsDetails;
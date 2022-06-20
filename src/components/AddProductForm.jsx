import { Box, Breadcrumbs, Button, Link, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../contexts/productsContext';
//title, description, price, image
const AddProductForm = () => {
    const { createProduct } = useContext(productsContext)
    const navigate = useNavigate()
    // console.log(createProduct);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState("")
    const [image, setImage] = useState('')

    function handleValues() {
        let newProduct = {
            title,
            description,
            price,
            // price: +price,
            image
        }
        if (!title.trim() || !description.trim() || !price || !image.trim()) {
            alert("заполните поля!")
            return
        }

        // console.log(newProduct);
        createProduct(newProduct)
        navigate("/products")
    }
    console.log(typeof price);
    return (
        <Container maxWidth="sm">
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
                <Typography color="text.primary">Add</Typography>
            </Breadcrumbs>
            <Typography variant="h4" component="h2" textAlign={"center"} marginTop={"15px"}>
                Add new product
            </Typography>
            <Box padding={'30px'} display={"flex"} flexDirection={"column"} >
                <TextField value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: "10px" }} id="standard-basic" label="Title" variant="standard" />
                <TextField value={description} onChange={(e) => setDescription(e.target.value)} style={{ margin: "10px" }} id="standard-basic" label="Description" variant="standard" />
                <TextField type="number" value={price} onChange={(e) => setPrice(+e.target.value)} style={{ margin: "10px" }} id="standard-basic" label="Price" variant="standard" />
                <TextField value={image} onChange={(e) => setImage(e.target.value)} style={{ margin: "10px" }} id="standard-basic" label="Image" variant="standard" />
                <Button onClick={handleValues} variant="contained" color="success">
                    Success
                </Button>
            </Box>
        </Container>
    );
};

export default AddProductForm;
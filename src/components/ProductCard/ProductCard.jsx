import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import { cardContext } from '../../contexts/cardContext';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const { deleteProduct } = useContext(productsContext)
    const { addProductToCart, checkProductInCart } = useContext(cardContext)
    const [checkProduct, setCheckProduct] = useState(checkProductInCart(item))
    return (
        <Card sx={{ maxWidth: 300, margin: "20px" }}>
            <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description.length > 20 ? `${item.description.slice(0, 20)}...` : item.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => deleteProduct(item.id)} size="small">
                    <DeleteIcon />
                </Button>
                <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                    <EditIcon></EditIcon>
                </Button>
                <Button onClick={() => {
                    addProductToCart(item);
                    setCheckProduct(checkProductInCart(item))
                }} size="small" >
                    <AddShoppingCartIcon
                        color={checkProduct ? "secondary" : "primary"}
                    // style={{ color: checkProduct ? "red" : "black" }} 
                    />
                </Button>
                <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
                    <MoreHorizIcon></MoreHorizIcon>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
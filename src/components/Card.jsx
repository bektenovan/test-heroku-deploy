import React, { useContext, useEffect } from 'react';
import { cardContext } from '../../src/contexts/cardContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Container, IconButton, Typography } from '@mui/material';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';




export default function Card() {
    const { getCart, cart, changeProductCount, deleteFromCart } = useContext(cardContext);
    useEffect(() => {
        getCart();
    }, [])
    console.log(cart);

    const navigate = useNavigate()
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Count</TableCell>
                            <TableCell align="right">SubPrice</TableCell>
                            <TableCell align="right">Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* //если кард есть то покажи продукты */}
                        {cart &&
                            cart?.products.map((row) => (
                                <TableRow
                                    key={row.item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.item.title}
                                    </TableCell>
                                    <TableCell align="right">{row.item.price}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" onClick={() => changeProductCount(row.count - 1, row.item.id)}>
                                            <IndeterminateCheckBoxIcon />
                                        </IconButton> {row.count}
                                        <IconButton aria-label="delete" onClick={() => changeProductCount(row.count + 1, row.item.id)}>
                                            <AddBoxIcon />
                                        </IconButton></TableCell>
                                    <TableCell align="right">{row.subPrice}</TableCell>


                                    <TableCell align="right">
                                        <IconButton aria-label="delete" color="primary" onClick={() => deleteFromCart(row.item.id)}>
                                            <RestoreFromTrashIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" color="primary" onClick={() => navigate(`/products/${row.item.id}`)}>
                                            <InfoIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                style={{ display: "flex", justifyContent: "flex-end", margin: "30px 200px" }}>
                <Typography variant="h5" component="h4">
                    Total: {cart && cart?.totalPrice}
                </Typography>
            </Box>
        </Container >
    );
}

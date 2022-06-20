import { Box, Button, Pagination } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { productsContext } from '../contexts/productsContext';
import Filter from './Filter';
import ProductCard from './ProductCard/ProductCard';


const ProductsList = () => {
    const { getProducts, products, pages } = useContext(productsContext)
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("q") ? searchParams.get('q') : "");
    const [price, setPrice] = useState([1, 10000]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setSearchParams({
            q: search,
            price_gte: price[0],
            price_lte: price[1],
            _page: page,
            _limit: 3,
        })
    }, [search, price, page])
    useEffect(() => {
        getProducts()
    }, [searchParams])
    // console.log(searchParams);
    // console.log(window.location.search);
    console.log(setPrice);
    return (
        <Container>
            <Button variant='outlined' style={{ margin: "30px" }} onClick={() => navigate("/addProduct")}>Add products</Button>
            <Filter
                search={search}
                setSearch={setSearch}
                price={price}
                setPrice={setPrice}>
            </Filter>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} paddingTop={"30px"} >
                {products.map((item) => <ProductCard key={item.id} item={item} />)}
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Pagination
                    page={page}
                    count={pages}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, value) => setPage(value)} />
            </Box>
        </Container>
    );
};

export default ProductsList;
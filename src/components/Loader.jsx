import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const Loader = () => {
    return (
        <Stack display={"flex"} justifyContent={"center"} height={"80vh"} alignItems={"center"} sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="success" />
        </Stack>







    );
};

export default Loader;
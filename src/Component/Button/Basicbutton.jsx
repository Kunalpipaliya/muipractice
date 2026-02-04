import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Basicbutton = () => {
    return (
        <div style={{marginTop:"30px"}}>
            <h3>basic buttons</h3>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}

export default Basicbutton

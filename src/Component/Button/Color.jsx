import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Color = () => {
  return (
    <div style={{marginTop:"30px"}}>
        <h3>Color</h3>
      <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
    </div>
  )
}

export default Color

import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const RatingPrecision = () => {
  return (
    <div>
        <Stack spacing={1}>
            <h3>Rating Precision</h3>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
    </div>
  )
}

export default RatingPrecision

import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const Icons = () => {
  return (
    <div>
        <h3>Icons</h3>
       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  color='error'/>} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  )
}

export default Icons

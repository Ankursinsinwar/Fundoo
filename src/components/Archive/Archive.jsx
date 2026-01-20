import React from 'react'
import ColorMenu from '../Note/ColorMenu'
import { Paper, IconButton, Box, TextField, ClickAwayListener, Typography, Tooltip } from '@mui/material';
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
// import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

export default function Archive() {
  return (
    <>
    <Box sx={{
      position:'absolute',
      top:100,
      left:100,
      zIndex:999,
      width:'50vw',
    }}>
      <ColorMenu/>

    </Box>
    </>
  )
}

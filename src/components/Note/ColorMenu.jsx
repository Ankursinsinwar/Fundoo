import React, { useState } from 'react';
import { Paper, IconButton, Box, TextField, ClickAwayListener, Typography, Tooltip } from '@mui/material';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

export default function ColorMenu({ setNoteColor, handleColorChange }) {
  const [showPallette, setShowPallette] = useState(false);
  const colors = [
    { name: 'Default', hex: "#ffffff" },
    { name: 'Coral', hex: "#faafa8" },
    { name: 'Peach', hex: "#f39f76" },
    { name: 'Sand', hex: "#fff8b8" },
    { name: 'Mint', hex: "#e2f6d3" },
    { name: 'Sage', hex: "#b4ddd3" },
    { name: 'Fog', hex: "#d4e4ed" },
    { name: 'Storm', hex: "#aeccdc" },
    { name: 'Dark', hex: "#aaaaaa" },
    { name: 'Dusk', hex: "#d3bfdb" },
    { name: 'Blossom', hex: "#e9e3d4" },
    { name: 'Clay', hex: "#efeff1" },
  ]

  return (
    <ClickAwayListener
      onClickAway={() => setShowPallette(false)}
    >

    <Box sx={{ display: 'flex', gap: 1, position: 'relative', p: 0, m: 0, overflow:'visible' }} onClick={() => setShowPallette(!showPallette)} >
      <Tooltip title="Background options">
        {/* <IconButton sx={{ '&:focus': { outline: 'none' }, p: 0, m: 0 }}> */}
          <ColorLensOutlinedIcon fontSize='small' sx={{p: 0, m: 0 }}/>
        {/* </IconButton> */}
      </Tooltip>
      {showPallette && (
        <Paper elevation={3} sx={{ 
          position: 'absolute', top: 35, left: { xs: -80, md: -10 }, p: 1, zIndex: 50, width: { xs: "30vw", md: "25vw" }, borderRadius:2 }}>
          <Box sx={{ display: 'flex', flexWrap: { xs: "wrap", md: "nowrap" }, justifyContent: 'space-evenly',}}>
            {colors.map((item) => (
              <Tooltip title={item.name} key={item.hex}>
                <Box
                  onClick={(e) => {
                    // e.stopPropagation();
                    setNoteColor(item.hex);
                    handleColorChange(item.hex);
                  }}
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: item.hex,
                    cursor: 'pointer',
                    border: '1px solid #ccc'
                  }}
                >
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
    </ClickAwayListener>
  )

}

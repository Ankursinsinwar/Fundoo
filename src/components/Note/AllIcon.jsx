import React from 'react'
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Box, IconButton } from '@mui/material';
import ColorMenu from './ColorMenu';

export default function AllIcon({ setNoteColor }) {
  return (
    <Box sx={{display:{ xs: "block", md: "flex", gap:8 }}}>
        <IconButton aria-label="new list" sx={{cursor:'default'}}>
                  <TextFormatOutlinedIcon fontSize="small" />
                </IconButton>
        <IconButton aria-label="new list">
                  {/* <ColorLensOutlinedIcon fontSize="small" /> */}
                  <ColorMenu setNoteColor={setNoteColor}/>
                </IconButton>
        <IconButton aria-label="new list" sx={{cursor:'default'}}>
                  <AddAlertOutlinedIcon fontSize="small" />
                </IconButton>
        <IconButton aria-label="new list" sx={{cursor:'default'}}>
                  <PersonAddAltOutlinedIcon fontSize="small" />
                </IconButton>
        <IconButton aria-label="new list" sx={{cursor:'default'}}>
                  <ImageOutlinedIcon fontSize="small" />
                </IconButton>
        <IconButton aria-label="new list">
                  <ArchiveOutlinedIcon fontSize="small" />
                </IconButton>
        <IconButton aria-label="new list" sx={{cursor:'default'}}>
                  <MoreVertOutlinedIcon fontSize="small" />
                </IconButton>

    </Box>
  )
}

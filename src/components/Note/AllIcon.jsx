import React from 'react'
import { useLocation } from "react-router-dom";

import { Box, IconButton } from '@mui/material';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ColorMenu from './ColorMenu';

export default function AllIcon({ setNoteColor, handleColorChange, handleArchive }) {
  const location = useLocation();
  const isArchived = location.pathname === "/dashboard/Archive";
  const isTrashed = location.pathname === "/dashboard/Trash";

  return (
    <Box sx={{ display: { xs: "block", md: "flex", gap: 8 } }}>
      {!isTrashed ? (
        <>
          <IconButton aria-label="text format" sx={{ cursor: 'default' }}>
            <TextFormatOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="color menu">
            <ColorMenu setNoteColor={setNoteColor} handleColorChange={handleColorChange} />
          </IconButton>

          <IconButton aria-label="reminder" sx={{ cursor: 'default' }}>
            <AddAlertOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="collaborator" sx={{ cursor: 'default' }}>
            <PersonAddAltOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="add image" sx={{ cursor: 'default' }}>
            <ImageOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="archive" onClick={handleArchive}>
            {isArchived ? (
              <UnarchiveOutlinedIcon fontSize="small" />
            ) : (
              <ArchiveOutlinedIcon fontSize="small" />
            )}
          </IconButton>

          <IconButton aria-label="more options" sx={{ cursor: 'default' }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton aria-label="more options" sx={{ cursor: 'default' }}>
            <RestoreFromTrashOutlinedIcon fontSize="small" />
          </IconButton>

        </>
      )}
    </Box>
  );
}

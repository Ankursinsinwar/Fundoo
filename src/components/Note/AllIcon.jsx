import React from 'react'
import { useLocation } from "react-router-dom";

import { Box, IconButton, Tooltip } from '@mui/material';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ColorMenu from './ColorMenu';

export default function AllIcon({ setNoteColor, handleColorChange, handleArchive, handleTrash, handleDelete, IsExpanded }) {
  const location = useLocation();
  const isArchived = location.pathname === "/dashboard/archive";
  const isTrashed = location.pathname === "/dashboard/trash";

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
              <Tooltip title="Unarchive">
              <UnarchiveOutlinedIcon fontSize="small" />
              </Tooltip>
            ) : (
              <Tooltip title="Archive">
              <ArchiveOutlinedIcon fontSize="small" />
              </Tooltip>
            )}
          </IconButton>
          {IsExpanded ? (
            <></>
          ) : (
            <IconButton aria-label="new list" onClick={handleTrash} sx={{ cursor: 'default' }}>
              <Tooltip title="Trash">
              <DeleteOutlinedIcon fontSize="small" />
              </Tooltip>
            </IconButton>
          )}
          <IconButton aria-label="more options" sx={{ cursor: 'default' }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton aria-label="more options" onClick={handleTrash} sx={{ cursor: 'default' }}>
            <Tooltip title="Restore delete">
            <RestoreFromTrashOutlinedIcon fontSize="small" />
            </Tooltip>
          </IconButton>
          <IconButton aria-label="new list" onClick={handleDelete} sx={{ cursor: 'default' }}>
            <Tooltip title="Parmanent delete">
            <DeleteOutlinedIcon fontSize="small" />
            </Tooltip>
          </IconButton>

        </>
      )}
    </Box>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import { Paper, IconButton, Box, TextField, ClickAwayListener, Typography, Tooltip } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { addNote } from "../../services/note.service";



import AllIcon from './AllIcon';


export default function TakeANote({fetchNotes} ) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [noteData, setNoteData] = useState({
    noteTitle: '',
    noteMsg: '',
  });

  const handleChange = (e) => {
    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value,
    });
  };


  const saveNote = async () => {
  if (!noteData.noteTitle && !noteData.noteMsg) {
    setIsExpanded(false);
    return;
  }

  const payload = {
    Userid: "1", // later from auth
    noteTitle: noteData.noteTitle,
    noteMsg: noteData.noteMsg,
    color: NoteColor,
    archive: false,
  };

  try {
    await addNote(payload);
    fetchNotes();
  } catch (err) {
    console.error(err);
  }

  setNoteData({ noteTitle: "", noteMsg: "" });
  setNoteColor("#ffffff");
  setIsExpanded(false);
};



  const [NoteColor, setNoteColor] = useState('#ffffff');

  return (
    <>
      <ClickAwayListener
        onClickAway={saveNote}
      // onClickAway={() => {
      // setIsExpanded(false);
      // setNoteColor('#ffffff');
      // }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 10,
            // mr: { xs: 0, md: 0 },
            ml: { xs: 5, md: 0 }
          }}
        >
          <Paper
            elevation={3}
            sx={{
              bgcolor: NoteColor,
              display: 'flex',
              flexDirection: "column",
              width: '40vw',
              borderRadius: 2,
              p: 0.5,
              border: '1px solid #e0e0e0',
              boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
            }}
          >
            {isExpanded && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  placeholder="Title"
                  name='noteTitle'
                  value={noteData.noteTitle}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    ml: 1,
                    mb: 1,
                    '& .MuiInputBase-input': { fontWeight: 'bold', fontSize: '1.1rem' }
                  }}
                />
                <IconButton aria-label="new list">
                  <PushPinOutlinedIcon />
                </IconButton>
              </Box>
            )}

            <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, alignItems: 'center' }}>
              <TextField
                onClick={() => setIsExpanded(true)}
                placeholder="Take a note..."
                name='noteMsg'
                value={noteData.noteMsg}
                onChange={handleChange}
                fullWidth
                multiline
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: { padding: '4px 8px' }
                }}
                sx={{ flex: 1 }}
              />

              {!isExpanded && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Tooltip title="new list">
                    <IconButton aria-label="new list">
                      <CheckBoxOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="new note with drawing">
                    <IconButton aria-label="new drawing">
                      <BrushOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="new note with image">
                    <IconButton aria-label="new image note">
                      <ImageOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>

            {isExpanded && (
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Box sx={{ display: 'flex' }}>
                  <AllIcon setNoteColor={setNoteColor} />
                </Box>
                <Box
                  onClick={saveNote}
                  // onClick={() => setIsExpanded(false)}
                  sx={{ cursor: 'pointer', fontSize: '14px', p: 1, fontWeight: 500 }}
                >
                  <Typography variant="h6" sx={{ fontSize: 15 }}>Close</Typography>
                </Box>
              </Box>
            )}
          </Paper>
        </Box>
      </ClickAwayListener>
      {/* </Box> */}
    </>
  );
}
import React, { useState } from 'react'; // Added useState import
import { Paper, IconButton, Box, TextField, ClickAwayListener, Typography, Tooltip, Toolbar } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import AllIcon from './AllIcon';


export default function ShowNotes({ note, viewType }) {
    const [isshowd, setIsshow] = useState(false);

    const [NoteColor, setNoteColor] = useState('#ffffff');
    // const viewType = viewType.viewType;
    // console.log('sn', viewType);

    return (
        <>
            {/* <ClickAwayListener onClickAway={() => { 
           setNoteColor(NoteColor);
        }}>*/}

            <Paper
                elevation={3}
                onMouseEnter={() => setIsshow(true)}
                onMouseLeave={() => setIsshow(false)}
                sx={{
                    bgcolor: note.color,
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    mb: 5,
                    // width:'40vw',
                    // width: { xs: '40vw', md: (viewType === 'List' ? '40vw' : '30%')},
                    // width: viewType === 'List' ? { xs: '40vw', md: '40vw' } :  { xs: '40vw', md: '30vw' },
                    width: '100%',
                    maxWidth: viewType === 'List' ? '40vw' : 400,
                    // overflow: 'hidden',
                    borderRadius: 2,
                    p: 0.5,
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
                }}
            >

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', }}>
                    <Typography variant="h5"
                        sx={{
                            width: '80%',
                            // background:
                            //     "linear-gradient(to right, #00a1ff, #ff0500)",
                            // WebkitBackgroundClip: "text",
                            // WebkitTextFillColor: "transparent"
                        }}>
                        {note.noteTitle}
                    </Typography>
                    <IconButton aria-label="new list" sx={{position:'relative', zIndex: (isshowd ? 1 : -1) }}>
                        <PushPinOutlinedIcon />
                    </IconButton>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, alignItems: 'center' }}>
                    <Typography variant="h5"
                        sx={{
                            width: '80%',
                            // background:
                            //     "linear-gradient(to right, #00a1ff, #ff0500)",
                            // WebkitBackgroundClip: "text",
                            // WebkitTextFillColor: "transparent"
                        }}>
                        {note.noteMsg}
                    </Typography>
                </Box>


                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1,
                        zIndex: (isshowd ? 1 : -1)
                    }}
                >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap',}}>
                        <AllIcon setNoteColor={setNoteColor} />
                    </Box>
                    <Box
                        sx={{ cursor: 'pointer', fontSize: '14px', p: 1, fontWeight: 500 }}
                    >
                        {/* <Typography variant="h6" sx={{ fontSize: 15 }}>delete</Typography> */}
                        <IconButton aria-label="new list" sx={{cursor:'default'}}>
                  <DeleteOutlinedIcon fontSize="small" />
                </IconButton>
                    </Box>
                </Box>

            </Paper>

            {/*  </ClickAwayListener> */}
        </>
    );
}
import React, { useState } from 'react'; // Added useState import
import { Paper, IconButton, Box, TextField, ClickAwayListener, Typography, Tooltip, Toolbar } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { deleteNote } from "../../services/note.service";
import { updateNote } from "../../services/note.service";


import AllIcon from './AllIcon';


export default function ShowNotes({ note, viewType, fetchNotes }) {
    const [isshowd, setIsshow] = useState(false);

    const [NoteColor, setNoteColor] = useState('#ffffff');
    const [isEditing, setIsEditing] = useState(false);

    const [editData, setEditData] = useState({
        noteTitle: note.noteTitle,
        noteMsg: note.noteMsg,
    });


    const handleEditChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
        setIsEditing(true);
    };
    const saveEditedNote = async () => {
        if (
            editData.noteTitle === note.noteTitle &&
            editData.noteMsg === note.noteMsg
        ) {
            setIsEditing(false);
            return;
        }

        try {
            await updateNote(note.id, {
                noteTitle: editData.noteTitle,
                noteMsg: editData.noteMsg,
            });
            fetchNotes();
        } catch (err) {
            console.error(err);
        }
        setIsEditing(false);
    };


    const handleColorChange = async (color) => {
        try {
            await updateNote(note.id, { color });
            fetchNotes();
        } catch (err) {
            console.error(err);
        }
    };

    const [isTrash, setTrash] = useState(note.trash)

    const handleTrash = async () => {
        try {
            const newTrashValue = !isTrash;
            setTrash(newTrashValue);
            await updateNote(note.id, { trash: newTrashValue });
            fetchNotes();
        } catch (err) {
            console.error(err);
        }
    };


    const handleDelete = async () => {
        try {
            await deleteNote(note.id);
            fetchNotes();
        } catch (err) {
            console.error(err);
        }
    };

    const [isArchive, setArchive] = useState(note.archive)

    const handleArchive = async () => {
        try {
            const newArchiveValue = !isArchive;
            setArchive(newArchiveValue);
            await updateNote(note.id, { archive: newArchiveValue });
            fetchNotes();
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <>
            <ClickAwayListener onClickAway={() => {
                if (isEditing) saveEditedNote();
            }}>


                <Paper
                    elevation={isshowd ? 2 : 0}
                    onMouseEnter={() => setIsshow(true)}
                    onMouseLeave={() => setIsshow(false)}
                    sx={{
                        bgcolor: note.color,
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        mb: viewType === 'List' ? 9: 'none',
                        // width:'40vw',
                        // width: { xs: '40vw', md: (viewType === 'List' ? '40vw' : '30%')},
                        // width: viewType === 'List' ? { xs: '40vw', md: '40vw' } :  { xs: '40vw', md: '30vw' },
                        width: '100%',
                        maxWidth: viewType === 'List' ? '40vw' : 350,
                        // overflow: 'hidden',
                        borderRadius: 1,
                        p: 0.5,
                        // border: '1px solid #e0e0e0',
                        // boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
                    }}
                >

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                        {/* <Typography variant="h5"
                        sx={{
                            width: '80%',
                            mt: 1,
                            mb: 1,
                            ml: 2,
                            // background:
                            //     "linear-gradient(to right, #00a1ff, #ff0500)",
                            // WebkitBackgroundClip: "text",
                            // WebkitTextFillColor: "transparent"
                        }}>
                        {note.noteTitle}
                    </Typography> */}
                        {/* {isEditing ? ( */}
                            <TextField
                                name="noteTitle"
                                value={editData.noteTitle}
                                onChange={handleEditChange}
                                variant="standard"
                                fullWidth
                                InputProps={{ disableUnderline: true }}
                                sx={{
                                    ml: 2,
                                    // mb: 1,
                                    '& .MuiInputBase-input': {fontSize: '1.5rem' }
                                }}
                            />
                        {/* ) : ( */}
                            {/* <Typography
                                variant="h5"
                                sx={{ width: "80%", mt: 1, mb: 1, ml: 2 }}
                                onClick={() => setIsEditing(true)}
                            >
                                {note.noteTitle}
                            </Typography> */}
                        {/* )} */}

                        <IconButton aria-label="new list" sx={{
                            position: 'relative',
                            //  zIndex: (isshowd ? 1 : -1) ,
                            opacity: isshowd ? 1 : 0,
                            pointerEvents: isshowd ? "auto" : "none"

                        }}>
                            <PushPinOutlinedIcon />
                        </IconButton>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, alignItems: 'center' }}>
                        {/* <Typography variant="h7"
                            sx={{
                                width: '80%',
                                ml: 2,

                                // background:
                                //     "linear-gradient(to right, #00a1ff, #ff0500)",
                                // WebkitBackgroundClip: "text",
                                // WebkitTextFillColor: "transparent"
                            }}>
                            {note.noteMsg}
                        </Typography> */}
                        {/* {isEditing ? ( */}
                            <TextField
                                name="noteMsg"
                                value={editData.noteMsg}
                                onChange={handleEditChange}
                                variant="standard"
                                fullWidth
                                multiline
                                InputProps={{ disableUnderline: true }}
                                sx={{ ml: 2 }}
                            />
                        {/* ) : ( */}
                            {/* <Typography
                                sx={{ width: "80%", ml: 2 }}
                                onClick={() => setIsEditing(true)}
                            >
                                {note.noteMsg}
                            </Typography> */}
                        {/* )} */}

                    </Box>


                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 1,
                            // zIndex: (isshowd ? 1 : -1)
                            opacity: isshowd ? 1 : 0,
                            transition: "opacity 0.2s ease",
                        }}
                    >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
                            <AllIcon setNoteColor={setNoteColor} handleColorChange={handleColorChange} handleArchive={handleArchive} handleTrash={handleTrash} handleDelete={handleDelete} />
                        </Box>
                    </Box>

                </Paper>

            </ClickAwayListener>
        </>
    );
}
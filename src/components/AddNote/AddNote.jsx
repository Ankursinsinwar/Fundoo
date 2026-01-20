import React, { useState, useEffect } from 'react'
import TakeANote from '../Note/TakeNote'
import ShowNotes from '../Note/ShowNotes'
import { Box } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import { useOutletContext } from 'react-router-dom'
import axios from 'axios';


export default function AddNote() {
    const viewType = useOutletContext();
    // console.log('an:', viewType);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes?Userid=1')
            .then((res) => {
                setNotes(res.data);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <>
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TakeANote />

                {/* LIST VIEW */}
                {viewType === 'List' && (
                    <Box
                        sx={{
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: 10,
                            // mr: { xs: 0, md: 0 },
                            ml: { xs: 5, md: 0 },
                        }}
                    >
                        {notes.map((note, index) => (
                            <ShowNotes key={note.Noteid} note={note} viewType={viewType} />
                        ))}
                    </Box>
                )}

                {/* GRID VIEW (MASONRY) */}
                {viewType === 'Grid' && (
                    <Box
                        sx={{
                            width: { xs: '100%',sd:'50%', md: '80%' },
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 10, 
                            ml: { xs: 1,sd:0.5, md: 0 },
                            position:'relative',
                            left:{ xs: 10,sd:80, md: 150 },
                            
                        }}
                    >
                        <Masonry
                            columns={{ xs: 1, sm: 2, md: 3 }}
                            spacing={3}
                            sx={{
                                width:{xs: '50%', md: '100%'} ,
                                maxWidth: 1200,
                                margin: 0,
                                // pl: { xs: 5, sm: 10, md: 10 },
                            }}
                        >
                            {notes.map((note) => (
                                <ShowNotes key={note.Noteid} note={note} viewType={viewType} />
                            ))}
                        </Masonry>
                    </Box>
                )}
            </Box>


        </>
    )
}

import React, { useState, useEffect } from 'react'
import TakeANote from '../Note/TakeNote'
import ShowNotes from '../Note/ShowNotes'
import { Box } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import { useOutletContext } from 'react-router-dom'
import { getArchiveNotes } from "../../services/note.service";
import TempBack from '../TempBack/TempBack'



export default function Archive() {
    const viewType = useOutletContext();
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log('an:', viewType);
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const res = await getArchiveNotes(user.id);
            setNotes([...res.data].reverse());
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        fetchNotes();
    }, []);



    return (
        <>
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <TakeANote fetchNotes={fetchNotes}/> */}
                <Box height={90}></Box>

                {notes.length === 0 ? (
                    <TempBack />
                ) : (
                    <>

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
                                    <ShowNotes key={note.Noteid} note={note} viewType={viewType} fetchNotes={fetchNotes} />
                                ))}
                            </Box>
                        )}

                        {/* GRID VIEW (MASONRY) */}
                        {viewType === 'Grid' && (
                            <Box
                                sx={{
                                    width: { xs: '100%', sd: '50%', md: '80%' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mt: 10,
                                    ml: { xs: 1, sd: 0.5, md: 0 },
                                    position: 'relative',
                                    left: { xs: 10, sd: 80, md: 150 },

                                }}
                            >
                                <Masonry
                                    columns={{ xs: 1, sm: 2, md: 3, ld: 3 }}
                                    spacing={4}
                                    sx={{
                                        width: { xs: '50%', md: '100%' },
                                        maxWidth: 1200,
                                        margin: 0,
                                        // pl: { xs: 5, sm: 10, md: 10 },
                                    }}
                                >
                                    {notes.map((note) => (
                                        <ShowNotes key={note.Noteid} note={note} viewType={viewType} fetchNotes={fetchNotes} />
                                    ))}
                                </Masonry>
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </>
    )
}

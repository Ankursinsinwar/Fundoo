import React, { useState, useEffect, useContext, useCallback } from 'react'
import TakeANote from '../Note/TakeNote'
import TempBack from '../TempBack/TempBack'
import ShowNotes from '../Note/ShowNotes'
import { Box } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import { useOutletContext } from 'react-router-dom'
import { getNotes } from "../../services/note.service";
import { UserContext } from '../../context/userContext'


export default function AddNote() {
    const viewType = useOutletContext();
    // const user = JSON.parse(localStorage.getItem("user"));
    const user = useContext(UserContext);
    // console.log('an1:', viewType);
    // console.log('an2:', user.id);
    const [notes, setNotes] = useState([]);

    // const fetchNotes = async () => {
    //     try {
    //         const res = await getNotes(user.id);
    //         setNotes([...res.data].reverse());
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // useEffect(() => {
    //     fetchNotes();
    // }, []);

    const fetchNotes = useCallback(async () => {
        if (!user?.id) return;

        try {
            const res = await getNotes(user.id);
            setNotes([...res.data].reverse());
        } catch (err) {
            console.error(err);
        }
    }, [user?.id]);


    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);



    return (
        <>
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TakeANote fetchNotes={fetchNotes} />
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
                                    <ShowNotes key={note.id} note={note} viewType={viewType} fetchNotes={fetchNotes} />
                                ))}
                            </Box>
                        )}

                        {/* GRID VIEW (MASONRY) */}
                        {viewType === 'Grid' && (
                            <Box
                                sx={{
                                    width: { xs: '120%', sd: '50%', md: '80%' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mt: 10,
                                    ml: { xs: 1, sd: 0.5, md: 0 },
                                    position: 'relative',
                                    left: { xs: 20, sd: 80, md: 150 },

                                }}
                            >
                                <Masonry
                                    columns={{ xs: 1, sm: 2, md: 3, ld: 2 }}
                                    spacing={4}
                                    sx={{
                                        // display:"flex",
                                        // gap:3,
                                        // flexWrap:"wrap",
                                        width: { xs: '50%', md: '100%' },
                                        maxWidth: 1200,
                                        margin: 0,
                                        // pl: { xs: 5, sm: 10, md: 10 },
                                    }}
                                >
                                    {notes.map((note) => (
                                        <ShowNotes key={note.id} note={note} viewType={viewType} fetchNotes={fetchNotes} />
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

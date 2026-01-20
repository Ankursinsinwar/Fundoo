import React from 'react'
import { Box, Avatar, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Popup() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center',
                    backgroundColor: '#e9f6ff',
                    '& > :not(style)': {
                        m: 1,
                        // p: 1,
                        //   width: 128,
                        //   height: 128,
                    },
                    width: { xs: "70vw", md: "25vw" } ,
                    height: '45vh',
                }}
            >

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {/* <AccountCircle /> */}
                    <Avatar sx={{ width: 80, height: 80, background:'orange' }}>{/*<img src={acc} alt="A" style={{ height: 30 }} />*/}A</Avatar>
                </IconButton>

                <Typography variant="h6" sx={{
                    fontSize: 22,
                    fontWeight: 500,
                    color: `#5f6368`,
                    margin: 0,

                }}>Hi Ankur!</Typography>

                <Typography variant="h7" sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: `#5f6368`,
                    margin: 0,

                }}>ankursininwar@gmail.com</Typography>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: 'center',
                        alignItems:'center',
                        p: 1,

                    }}
                >
                    <Box
                        sx={{
                            width: '40%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems:'center',
                            justifyContent:{ xs: "center", md: 'flex-start' },
                            p: 1,
                            pl:2,
                            m: 0.1,
                            backgroundColor: 'white',
                            border: '1px #f6fafd solid',
                            borderTopLeftRadius:{ xs: "none", md: 30 },
                            borderBottomLeftRadius: { xs: "none", md: 30 },
                        }}
                        >
                        <AddCircleOutlineIcon />
                        <Typography variant="h2" sx={{
                            fontSize: 18,
                            ml:1,
                            
                        }}>Add Account</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '40%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems:'center',
                            justifyContent:{ xs: "center", md: 'flex-start' },
                            p: 1,
                            pr:2,
                            m: 0.1,
                            backgroundColor: 'white',
                            border: '1px #f6fafd solid',
                            borderTopRightRadius: { xs: "none", md: 30 },
                            borderBottomRightRadius: { xs: "none", md: 30 },
                        }}
                    >
                        <LogoutIcon />
                        <Typography variant="h2" sx={{
                            fontSize: 18,
                            ml:1,

                        }}>Sign Out</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

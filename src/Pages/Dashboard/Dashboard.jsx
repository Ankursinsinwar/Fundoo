import React, { useState, createContext, useContext } from "react";
import { Outlet, Link } from 'react-router-dom'
import Header from '../../components/Navbar/Header'
import Sidebar from '../../components/Sidenav/Sidebar'
import TakeNote from '../../components/Note/TakeNote';
import Box from '@mui/material/Box';

const UserContext = createContext();

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const [viewType, setViewType] = useState('List');
    // console.log('das:', viewType);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection:'column' }}>

                <Header handleOpen={handleOpen} viewType={viewType} setViewType={setViewType} />

                <Sidebar isOpen={isOpen} handleOpen={handleOpen} />

                {/* <TakeNote /> */}
                <Outlet context={viewType}/>

            </Box>

        </>
    )
}

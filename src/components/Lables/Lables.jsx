import React from 'react'
import TakeANote from '../Note/TakeNote'
import { Box } from '@mui/material'
import TempBack from '../TempBack/TempBack'


export default function Lables() {
  return (
    <>
 <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
    <TakeANote/>
    <TempBack />
    </Box>
    </>
  )
}

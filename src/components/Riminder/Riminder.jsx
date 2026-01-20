import React from 'react'
import TakeANote from '../Note/TakeNote'
import { Box } from '@mui/material'

export default function Riminder() {
  return (
    <>
 <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
    <TakeANote/>
    </Box>
    </>
  )
}

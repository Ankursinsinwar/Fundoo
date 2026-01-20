import React from 'react'
import { Box } from "@mui/material";
import Mid from "../../components/SignIn/Mid/Mid";

export default function SignIn() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign:'center'
      }}
    >
      <Mid />
    </Box>
  )
}

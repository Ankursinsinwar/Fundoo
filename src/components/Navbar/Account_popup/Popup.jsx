import React from "react";
import { Box, Avatar, IconButton, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function Popup({ user }) {
  const navigate = useNavigate();

  const handleAddAccount = () => {
    localStorage.removeItem("user");
    navigate("/signin", { replace: true });
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/signin", { replace: true });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#e9f6ff",
        width: { xs: "70vw", md: "25vw" },
        height: "45vh",
      }}
    >
      <IconButton>
        <Avatar sx={{ width: 80, height: 80, background: "orange" }}>
          {user?.firstName?.[0]}
        </Avatar>
      </IconButton>

      <Typography
        sx={{ fontSize: 22, fontWeight: 500, color: "#5f6368" }}
      >
        Hi {user?.firstName}!
      </Typography>

      <Typography
        sx={{ fontSize: 15, fontWeight: 500, color: "#5f6368" }}
      >
        {user?.email}
      </Typography>

      {/* ACTION BUTTONS */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          p: 1,
        }}
      >
        {/* ADD ACCOUNT */}
        <Box
          onClick={handleAddAccount}
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            p: 1,
            m: 0.5,
            backgroundColor: "white",
            border: "1px solid #f6fafd",
            borderRadius: { md: "30px 0 0 30px" },
            cursor: "pointer",
            "&:hover": { backgroundColor: "#f1f8ff" },
          }}
        >
          <AddCircleOutlineIcon />
          <Typography sx={{ fontSize: 18, ml: 1 }}>
            Add Account
          </Typography>
        </Box>

        {/* SIGN OUT */}
        <Box
          onClick={handleSignOut}
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            p: 1,
            m: 0.5,
            backgroundColor: "white",
            border: "1px solid #f6fafd",
            borderRadius: { md: "0 30px 30px 0" },
            cursor: "pointer",
            "&:hover": { backgroundColor: "#fff1f1" },
          }}
        >
          <LogoutIcon />
          <Typography sx={{ fontSize: 18, ml: 1 }}>
            Sign Out
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

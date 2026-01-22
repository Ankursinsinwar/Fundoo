import { Box, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { useLocation } from "react-router-dom";

export default function TempBack() {
  const { pathname } = useLocation();

  let icon = <LightbulbOutlinedIcon sx={{ fontSize: 120, opacity: 0.3 }} />;
  let text = "Notes you add appear here";

  switch (true) {
    case pathname === "/dashboard":
      icon = <LightbulbOutlinedIcon sx={{ fontSize: 120, opacity: 0.3 }} />;
      text = "Notes you add appear here";
      break;

    case pathname === "/dashboard/reminder":
      icon = <NotificationsNoneOutlinedIcon sx={{ fontSize: 120, opacity: 0.3 }} />;
      text = "Notes with upcoming reminders appear here";
      break;

    case pathname === "/dashboard/labels":
      icon = <EditOutlinedIcon sx={{ fontSize: 120, opacity: 0.3 }} />;
      text = "No notes with this label yet";
      break;

    case pathname === "/dashboard/archive":
      icon = <ArchiveOutlinedIcon sx={{ fontSize: 120, opacity: 0.3 }} />;
      text = "Your archived notes appear here";
      break;

    case pathname === "/dashboard/trash":
      icon = <DeleteOutlinedIcon sx={{ fontSize: 120, opacity: 0.3 }} />;
      text = "No notes in Trash";
      break;

    default:
      break;
  }

  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#80868b",
      }}
    >
      {icon}
      <Typography variant="h6" sx={{ mt: 2 }}>
        {text}
      </Typography>
    </Box>
  );
}

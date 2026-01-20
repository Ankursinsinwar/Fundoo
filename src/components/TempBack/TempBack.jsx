import React from 'react'
import { useLocation } from "react-router-dom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// "/dashboard" ,
// "/dashboard/Reminder" 
// "/dashboard/Labels"
// "/dashboard/Archive"
// "/dashboard/Trash"
export default function TempBack() {

  const renderPage = () => {
    switch (useLocation().pathname) {
      case "/dashboard":
        return <></>
        break;
      case "/dashboard/Reminder":
        return <></>
        break;
      case "/dashboard/Labels":
        return <></>
        break;
      case "/dashboard/Archive":
        return <></>
        break;
      case "/dashboard/Trash":
        return <></>
        break;
      default:
        return <><h1>404: Page Not Found</h1></>
    }
  }
  return (
    <>
  {renderPage()}

    </>
  )
}

import { NavLink, useLocation } from "react-router-dom";
import {
  Box, Drawer, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, Toolbar
} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const menuItems = [
  { text: "Notes", icon: LightbulbOutlinedIcon, link: "/dashboard" },
  { text: "Reminder", icon: NotificationsNoneOutlinedIcon, link: "/dashboard/reminder" },
  { text: "Edit Labels", icon: EditOutlinedIcon, link: "/dashboard/labels" },
  { text: "Archive", icon: ArchiveOutlinedIcon, link: "/dashboard/archive" },
  { text: "Trash", icon: DeleteOutlinedIcon, link: "/dashboard/trash" },
];

export default function Sidebar({ isOpen }) {
  const drawerWidth = isOpen ? 250 : 70;
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { xs: 100, md: drawerWidth },
        "& .MuiDrawer-paper": {
          width: { xs: 100, md: drawerWidth },
          border: "none",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.link;

          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                height: '23%',
                width: drawerWidth,
                overflow: "hidden",
                backgroundColor: (isActive && isOpen) ? "#feefc3" : "transparent",
                borderTopRightRadius: "60px",
                borderBottomRightRadius: "60px",
                borderTopLeftRadius: isOpen ? 0 : "60px",
                borderBottomLeftRadius: isOpen ? 0 : "60px",
              }}
            >
              <ListItemButton
                component={NavLink}
                to={item.link}
                sx={{
                  color: "inherit",
                  borderTopRightRadius: "60px",
                  borderBottomRightRadius: "60px",
                  height: '100%',
                  pl: 3,
                  bgcolor: (isActive && !isOpen) ? "#feefc3" : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{
                    m: 0,
                    p: 0,
                    display: isOpen ? { xs: "none", md: "block" }: "block"
                  }
                  }>
                  <item.icon />
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  sx={{
                    display: isOpen ? { xs: "block", md: "block" } : "none",
                    m: 0, p: 0
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

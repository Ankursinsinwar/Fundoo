import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import { Tooltip } from '@mui/material';
import Popover from '@mui/material/Popover';
import { useLocation } from "react-router-dom";


import Popup from './Account_popup/Popup'

import logo from '../../assets/keep_logo.png';
import acc from '../../assets/z.png';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.common.black, 0.07),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: `750px`,
  display: `flex`,
  alignItems: `center`,
  height: `48px`,
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    marginLeft: theme.spacing(6),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: 'transparent',

    '&:focus': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header({ handleOpen, viewType, setViewType }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const handleAcountPopupOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const [viewType, setViewType] = React.useState('List');
  const handleViewType = () => {
    setViewType(viewType=='List'?'Grid':'List');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Popover
      id={menuId}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
    "& .MuiPopover-paper": {
      borderRadius: '50px',
      mt:1,
    },
  }}
    >
      <Popup />
    </Popover>
  );


  // const open = Boolean(anchorEl);
  // const id = 'simple-popover';
  // const renderMenu = (
  //   <Popover
  //       id={id}
  //       open={isMenuOpen}
  //       anchorEl={anchorEl}
  //       onClose={handleMenuClose}
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'left',
  //       }}
  //     >
  //       <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
  //     </Popover>
  // );


  const location = useLocation();

const pageTitles = {
  "/dashboard": "Fundo",
  "/dashboard/Reminder": "Reminder",
  "/dashboard/Labels": "Edit Labels",
  "/dashboard/Archive": "Archive",
  "/dashboard/Trash": "Trash",
};

const title = pageTitles[location.pathname];
// const title = pageTitles[location.pathname] || "Fundo";


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <RefreshIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit" onClick={handleViewType}>
          <Tooltip title={`${viewType} view`}>
                  {viewType=='List'&&(
                  <SplitscreenOutlinedIcon/>
                  )}
                  {viewType=='Grid'&&(
                  <GridViewOutlinedIcon/>
                  )}
                </Tooltip>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <SettingsOutlinedIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <AppsIcon />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleAcountPopupOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
          <Avatar sx={{ width: 25, height: 25, background:'orange' }}>{/*<img src={acc} alt="A" style={{ height: 30 }} />*/}A</Avatar>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, width: `100%` }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: '#fff',
            color: '#5f6368',
            borderBottom: '1px solid #e0e0e0',
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}>
          <Toolbar sx={{ minHeight: 64 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 0.8 }}
              onClick={handleOpen}
            >
              <Tooltip title="Menu">
                <MenuIcon />
              </Tooltip>
            </IconButton>

              <img src={logo} alt="keep"
                style={{ height: 38, width: 38, marginRight: 6, marginLeft: 0.8 , display: (title=='Fundo'? 'block':'none')}} />

            <Tooltip title={title}>
              <Typography variant="h6" sx={{
                fontSize: 22,
                fontWeight: 500,
                color: `#5f6368`,
                mr: 3,
                ml: 0.7,
                display: { xs: 'none', sm: 'block' }

              }}>{title}</Typography>
            </Tooltip>
            <Search>
              <Tooltip title="Search">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" color="inherit" sx={{pl:2,pr:2}}>
                <Tooltip title="Refresh">
                  <RefreshIcon />
                </Tooltip>
              </IconButton>
              <IconButton size="medium" color="inherit" sx={{pl:2,pr:2}} onClick={handleViewType}>
                <Tooltip title={`${viewType} view`}>
                  {viewType=='List'&&(
                  <SplitscreenOutlinedIcon/>
                  )}
                  {viewType=='Grid'&&(
                  <GridViewOutlinedIcon/>
                  )}
                </Tooltip>
              </IconButton>
              <IconButton size="medium" color="inherit" sx={{pl:2,pr:2}}>
                <Tooltip title="Settings">
                  <SettingsOutlinedIcon />
                </Tooltip>
              </IconButton>
              <IconButton size="medium" color="inherit" sx={{pl:2,pr:2}}>
                <Tooltip title="Fundo Apps">
                  <AppsIcon />
                </Tooltip>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleAcountPopupOpen}
                color="inherit"
              >
                {/* <AccountCircle /> */}
                <Tooltip title="Fundo Account">
                  <Avatar sx={{ width: 32, height: 32, background:'orange'}}>{/*<img src={acc} alt="A" style={{ height: 40 }} />*/}A</Avatar>
                </Tooltip>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
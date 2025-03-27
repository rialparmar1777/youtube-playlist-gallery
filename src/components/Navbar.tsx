import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';

interface NavbarProps {
  onMenuClick: () => void;
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

export const Navbar = ({ onMenuClick, onSidebarToggle, isSidebarOpen }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: '64px !important' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onMenuClick}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="toggle sidebar"
            onClick={onSidebarToggle}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <img
            src="/youtube-logo.png"
            alt="YouTube"
            style={{ height: 20, marginRight: 4 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bold',
              fontSize: '1.2rem',
              letterSpacing: '-1px',
            }}
          >
            YouTube
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', maxWidth: '600px', mx: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '40px',
              overflow: 'hidden',
              '&:focus-within': {
                borderColor: 'primary.main',
                boxShadow: '0 0 0 1px',
              },
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{ ml: 2, flex: 1 }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Tooltip title="Search with your voice">
            <IconButton sx={{ ml: 1 }}>
              <MicIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Create">
            <IconButton>
              <VideoCallIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="YouTube notifications">
            <IconButton>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Your profile">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>Y</Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 200,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: 2,
            },
          }}
        >
          <MenuItem onClick={handleProfileMenuClose}>
            <Avatar sx={{ width: 32, height: 32, mr: 2 }}>Y</Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>Your Name</Typography>
              <Typography variant="body2" color="text.secondary">@yourchannel</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Your channel</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Studio</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Switch account</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
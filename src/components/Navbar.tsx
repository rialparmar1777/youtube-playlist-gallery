import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Logout as LogoutIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ minHeight: '56px !important' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
          <YouTubeIcon sx={{ color: 'red', fontSize: 30 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'none', sm: 'block' }, 
              fontWeight: 'bold',
              fontSize: '1.2rem',
              letterSpacing: '-1px'
            }}
          >
            YouTube
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '600px', mx: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <InputBase
              placeholder="Search"
              sx={{
                flex: 1,
                bgcolor: 'background.paper',
                borderRadius: '20px 0 0 20px',
                px: 2,
                border: '1px solid',
                borderColor: 'divider',
                '& .MuiInputBase-input': {
                  py: 1,
                },
                '&:hover': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused': {
                  borderColor: 'primary.main',
                },
              }}
            />
            <IconButton 
              sx={{ 
                bgcolor: 'background.paper',
                borderRadius: '0 20px 20px 0',
                px: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderLeft: 'none',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Tooltip title="Search with your voice">
            <IconButton 
              sx={{ 
                ml: 1, 
                display: { xs: 'none', sm: 'block' },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <MicIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Create">
            <IconButton 
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <VideoCallIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton 
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <IconButton
            edge="end"
            onClick={handleProfileMenuOpen}
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>U</Avatar>
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 200,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            },
          }}
        >
          <Box sx={{ p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>U</Avatar>
            <Box>
              <Typography variant="subtitle2">User Name</Typography>
              <Typography variant="body2" color="text.secondary">user@example.com</Typography>
            </Box>
          </Box>
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <AccountCircleIcon sx={{ mr: 1 }} /> Your channel
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <AccountCircleIcon sx={{ mr: 1 }} /> Studio
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <SettingsIcon sx={{ mr: 1 }} /> Settings
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <HelpIcon sx={{ mr: 1 }} /> Help
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <FeedbackIcon sx={{ mr: 1 }} /> Send feedback
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <LogoutIcon sx={{ mr: 1 }} /> Sign out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
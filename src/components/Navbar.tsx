import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  YouTube as YouTubeIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
  user: any;
}

export const Navbar = ({ onSidebarToggle, isSidebarOpen, user }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
    handleClose();
  };

  const handleProfile = () => {
    navigate('/channel');
    handleClose();
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onSidebarToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            }
          }} 
          onClick={handleHomeClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleHomeClick();
            }
          }}
        >
          <YouTubeIcon sx={{ color: 'red', fontSize: 30, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            YouTube
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', ml: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'background.paper',
              borderRadius: 2,
              px: 2,
              py: 1,
              width: '100%',
              maxWidth: 600,
            }}
          >
            <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Search
            </Typography>
          </Box>
          <IconButton sx={{ ml: 1 }}>
            <MicIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton
            onClick={handleMenu}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar
              alt={user?.displayName || 'User'}
              src={user?.photoURL}
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 200,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderRadius: 2,
              },
            }}
          >
            <MenuItem onClick={handleProfile}>
              <Avatar
                alt={user?.displayName || 'User'}
                src={user?.photoURL}
                sx={{ width: 32, height: 32, mr: 2 }}
              />
              <Box>
                <Typography variant="body2">{user?.displayName}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleClose}>Your channel</MenuItem>
            <MenuItem onClick={handleClose}>YouTube Studio</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Sign out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
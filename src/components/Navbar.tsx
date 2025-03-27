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
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

interface NavbarProps {
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

export const Navbar = ({ onSidebarToggle, isSidebarOpen }: NavbarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ height: '64px', px: { xs: 1, sm: 2 } }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onSidebarToggle}
          sx={{ 
            mr: 2,
            display: { sm: 'block' },
            color: 'text.primary',
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          color: 'red',
          cursor: 'pointer',
          textDecoration: 'none',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '-1px' }}>
            YouTube
          </Typography>
        </Box>

        <Box sx={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: { sm: '600px' },
          mx: 'auto',
        }}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '600px',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '40px',
            overflow: 'hidden',
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}>
            <InputBase
              placeholder="Search"
              sx={{ 
                ml: 2, 
                flex: 1,
                '& input': {
                  p: 1,
                },
              }}
            />
            <IconButton sx={{ p: 1, color: 'text.primary' }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Tooltip title="Search with your voice">
            <IconButton sx={{ ml: 1, color: 'text.primary' }}>
              <MicIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          ml: 2,
        }}>
          <Tooltip title="Create">
            <IconButton color="inherit" sx={{ color: 'text.primary' }}>
              <VideoCallIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="YouTube notifications">
            <IconButton color="inherit" sx={{ color: 'text.primary' }}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Google Account">
            <IconButton
              onClick={handleMenu}
              sx={{ 
                p: 0,
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Avatar 
                sx={{ 
                  width: 32, 
                  height: 32,
                  cursor: 'pointer',
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>

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
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 32, height: 32, mr: 2 }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                User Name
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                user@example.com
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleClose}>Your channel</MenuItem>
          <MenuItem onClick={handleClose}>YouTube Studio</MenuItem>
          <MenuItem onClick={handleClose}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
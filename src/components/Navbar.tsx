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
  Badge,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
  Apps as AppsIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

interface NavbarProps {
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

export const Navbar = ({ onSidebarToggle, isSidebarOpen }: NavbarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [appsAnchorEl, setAppsAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAppsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAppsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAppsAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: '56px !important' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onSidebarToggle}
          sx={{ mr: 2, color: 'text.primary' }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: '-1px',
            }}
          >
            <span style={{ color: '#FF0000' }}>You</span>Tube
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'background.default',
            borderRadius: '40px',
            px: 2,
            py: 0.5,
            flexGrow: 1,
            maxWidth: { xs: '100%', sm: '600px' },
            ml: { xs: 1, sm: 2 },
          }}
        >
          <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
          <InputBase
            placeholder="Search"
            sx={{ flexGrow: 1, color: 'text.primary' }}
          />
          <IconButton sx={{ color: 'text.primary' }}>
            <MicIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
          <IconButton sx={{ color: 'text.primary' }}>
            <VideoCallIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.primary' }}>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton 
            sx={{ color: 'text.primary' }}
            onClick={handleAppsMenu}
          >
            <AppsIcon />
          </IconButton>
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32, 
              ml: 1,
              cursor: 'pointer'
            }}
            onClick={handleMenu}
          />
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 200,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Sign out</MenuItem>
        </Menu>

        <Menu
          anchorEl={appsAnchorEl}
          open={Boolean(appsAnchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 300,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <MenuItem onClick={handleClose}>YouTube TV</MenuItem>
          <MenuItem onClick={handleClose}>YouTube Music</MenuItem>
          <MenuItem onClick={handleClose}>YouTube Kids</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
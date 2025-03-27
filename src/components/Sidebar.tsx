import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Divider,
  Collapse,
  useTheme,
  useMediaQuery,
  Avatar,
  ButtonBase,
} from '@mui/material';
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  ThumbUp,
  WatchLater,
  PlaylistPlay,
  ChevronLeft,
  ChevronRight,
  Settings,
  Flag,
  Help,
  Feedback,
} from '@mui/icons-material';

interface SidebarProps {
  isOpen: boolean;
  drawerWidth: number;
  collapsedWidth: number;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, drawerWidth, collapsedWidth, onClose }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedItem, setSelectedItem] = useState('Home');

  const primaryMenuItems = [
    { icon: <Home />, text: 'Home' },
    { icon: <Explore />, text: 'Explore' },
    { icon: <Subscriptions />, text: 'Subscriptions' },
  ];

  const secondaryMenuItems = [
    { icon: <VideoLibrary />, text: 'Library' },
    { icon: <History />, text: 'History' },
    { icon: <ThumbUp />, text: 'Liked videos' },
    { icon: <WatchLater />, text: 'Watch later' },
    { icon: <PlaylistPlay />, text: 'Playlists' },
  ];

  const settingsMenuItems = [
    { icon: <Settings />, text: 'Settings' },
    { icon: <Flag />, text: 'Report history' },
    { icon: <Help />, text: 'Help' },
    { icon: <Feedback />, text: 'Send feedback' },
  ];

  const handleItemClick = (text: string) => {
    setSelectedItem(text);
    if (isMobile) {
      onClose();
    }
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        width: isOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isOpen ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
          borderRight: 'none',
          bgcolor: 'background.paper',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ 
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        px: 2,
      }}>
        <Collapse in={isOpen} orientation="horizontal">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ButtonBase sx={{ borderRadius: '50%' }}>
              <Avatar 
                sx={{ 
                  width: 24, 
                  height: 24,
                  bgcolor: 'error.main',
                  color: 'white',
                  fontSize: '0.875rem',
                }}
              >
                Y
              </Avatar>
            </ButtonBase>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
              YouTube
            </Typography>
          </Box>
        </Collapse>
      </Box>

      <Box sx={{ 
        height: 'calc(100vh - 56px)',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '3px',
        },
      }}>
        <List sx={{ py: 1 }}>
          {primaryMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={selectedItem === item.text}
                onClick={() => handleItemClick(item.text)}
                sx={{
                  minHeight: 40,
                  px: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  '&.Mui-selected': {
                    bgcolor: 'action.selected',
                    '&:hover': {
                      bgcolor: 'action.selected',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === item.text ? 'error.main' : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Collapse in={isOpen} orientation="horizontal">
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: selectedItem === item.text ? 500 : 400,
                    }}
                  />
                </Collapse>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <List sx={{ py: 1 }}>
          {secondaryMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={selectedItem === item.text}
                onClick={() => handleItemClick(item.text)}
                sx={{
                  minHeight: 40,
                  px: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  '&.Mui-selected': {
                    bgcolor: 'action.selected',
                    '&:hover': {
                      bgcolor: 'action.selected',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    color: selectedItem === item.text ? 'error.main' : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Collapse in={isOpen} orientation="horizontal">
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: selectedItem === item.text ? 500 : 400,
                    }}
                  />
                </Collapse>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        {isOpen && (
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ px: 1, mb: 1 }}>
              More from YouTube
            </Typography>
            <List sx={{ py: 0 }}>
              {settingsMenuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      px: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: '0.875rem',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Divider sx={{ my: 1 }} />

        {isOpen && (
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', px: 1 }}>
              © 2023 Google LLC
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};
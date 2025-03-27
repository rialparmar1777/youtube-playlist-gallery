import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  PlayCircle as PlayCircleIcon,
  ThumbUp as ThumbUpIcon,
  LocalFireDepartment as LocalFireDepartmentIcon,
  MusicNote as MusicNoteIcon,
  EmojiEvents as EmojiEventsIcon,
  SportsEsports as SportsEsportsIcon,
  Lightbulb as LightbulbIcon,
  Podcasts as PodcastsIcon,
  Settings as SettingsIcon,
  Flag as FlagIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Menu as MenuIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState('home');

  const mainMenuItems = [
    { text: 'Home', icon: <HomeIcon />, id: 'home' },
    { text: 'Shorts', icon: <PlayCircleIcon />, id: 'shorts' },
    { text: 'Subscriptions', icon: <SubscriptionsIcon />, id: 'subscriptions' },
  ];

  const exploreMenuItems = [
    { text: 'Explore', icon: <ExploreIcon />, id: 'explore' },
    { text: 'Trending', icon: <LocalFireDepartmentIcon />, id: 'trending' },
    { text: 'Music', icon: <MusicNoteIcon />, id: 'music' },
    { text: 'Gaming', icon: <SportsEsportsIcon />, id: 'gaming' },
    { text: 'Sports', icon: <EmojiEventsIcon />, id: 'sports' },
    { text: 'Learning', icon: <LightbulbIcon />, id: 'learning' },
    { text: 'Podcasts', icon: <PodcastsIcon />, id: 'podcasts' },
  ];

  const libraryMenuItems = [
    { text: 'Library', icon: <VideoLibraryIcon />, id: 'library' },
    { text: 'History', icon: <HistoryIcon />, id: 'history' },
    { text: 'Your videos', icon: <PlayCircleIcon />, id: 'your-videos' },
    { text: 'Watch later', icon: <PlayCircleIcon />, id: 'watch-later' },
    { text: 'Liked videos', icon: <ThumbUpIcon />, id: 'liked-videos' },
  ];

  const subscriptionMenuItems = [
    { text: 'Your channel', icon: <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main' }}>Y</Avatar>, id: 'your-channel' },
    { text: 'Channel 1', icon: <Avatar sx={{ width: 24, height: 24, bgcolor: 'secondary.main' }}>C1</Avatar>, id: 'channel1' },
    { text: 'Channel 2', icon: <Avatar sx={{ width: 24, height: 24, bgcolor: 'error.main' }}>C2</Avatar>, id: 'channel2' },
    { text: 'Channel 3', icon: <Avatar sx={{ width: 24, height: 24, bgcolor: 'success.main' }}>C3</Avatar>, id: 'channel3' },
  ];

  const moreMenuItems = [
    { text: 'Settings', icon: <SettingsIcon />, id: 'settings' },
    { text: 'Report history', icon: <FlagIcon />, id: 'report-history' },
    { text: 'Help', icon: <HelpIcon />, id: 'help' },
    { text: 'Send feedback', icon: <FeedbackIcon />, id: 'feedback' },
  ];

  const drawer = (
    <Box sx={{ width: 240 }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
          <YouTubeIcon sx={{ color: 'red', fontSize: 30 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-1px' }}>
            YouTube
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {mainMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: selectedItem === item.id ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: selectedItem === item.id ? 'bold' : 'normal',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {exploreMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: selectedItem === item.id ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: selectedItem === item.id ? 'bold' : 'normal',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {libraryMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: selectedItem === item.id ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: selectedItem === item.id ? 'bold' : 'normal',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subscriptionMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: selectedItem === item.id ? 'bold' : 'normal',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {moreMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: selectedItem === item.id ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: selectedItem === item.id ? 'bold' : 'normal',
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            borderRight: 'none',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            borderRight: 'none',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
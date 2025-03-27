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
  Collapse,
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
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState('home');
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const renderMenuItems = (items: typeof mainMenuItems) => (
    <List>
      {items.map((item) => (
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
              minHeight: 40,
              px: 2.5,
            }}
          >
            <ListItemIcon 
              sx={{ 
                minWidth: 40,
                color: selectedItem === item.id ? 'primary.main' : 'inherit',
                mr: isCollapsed ? 0 : 3,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <Collapse in={!isCollapsed} orientation="horizontal">
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: selectedItem === item.id ? 'bold' : 'normal',
                  }
                }}
              />
            </Collapse>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const drawer = (
    <Box sx={{ 
      width: isCollapsed ? 70 : 240,
      transition: 'width 0.2s ease-in-out',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        justifyContent: isCollapsed ? 'center' : 'flex-start',
      }}>
        <IconButton onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          cursor: 'pointer',
          width: '100%',
          justifyContent: isCollapsed ? 'center' : 'flex-start',
        }}>
          <YouTubeIcon sx={{ color: 'red', fontSize: 30 }} />
          <Collapse in={!isCollapsed} orientation="horizontal">
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-1px' }}>
              YouTube
            </Typography>
          </Collapse>
        </Box>
      </Box>
      <Divider />
      {renderMenuItems(mainMenuItems)}
      <Divider />
      {renderMenuItems(exploreMenuItems)}
      <Divider />
      {renderMenuItems(libraryMenuItems)}
      <Divider />
      {renderMenuItems(subscriptionMenuItems)}
      <Divider />
      {renderMenuItems(moreMenuItems)}
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 1, display: 'flex', justifyContent: isCollapsed ? 'center' : 'flex-end' }}>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: isCollapsed ? 70 : 240 }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: isCollapsed ? 70 : 240,
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
            width: isCollapsed ? 70 : 240,
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
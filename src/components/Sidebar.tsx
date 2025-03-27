import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  PlayCircle as PlayCircleIcon,
  ThumbUp as ThumbUpIcon,
  WatchLater as WatchLaterIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Menu as MenuIcon,
  WhatshotOutlined as TrendingIcon,
  MusicNote as MusicIcon,
  SportsEsports as GamingIcon,
  Movie as MoviesIcon,
  Newspaper as NewsIcon,
  LiveTv as LiveIcon,
  SportsBasketball as SportsIcon,
  LightbulbOutlined as LearningIcon,
  EmojiEvents as AwardsIcon,
  Diamond as PremiumIcon
} from '@mui/icons-material';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const drawerWidth = 240;
const collapsedDrawerWidth = 72;

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const mainMenuItems = [
    { icon: <HomeIcon />, text: 'Home' },
    { icon: <ExploreIcon />, text: 'Explore' },
    { icon: <SubscriptionsIcon />, text: 'Subscriptions' },
    { icon: <VideoLibraryIcon />, text: 'Library' },
  ];

  const libraryItems = [
    { icon: <HistoryIcon />, text: 'History' },
    { icon: <PlayCircleIcon />, text: 'Your videos' },
    { icon: <WatchLaterIcon />, text: 'Watch later' },
    { icon: <ThumbUpIcon />, text: 'Liked videos' },
  ];

  const subscriptions = [
    { name: 'Channel 1', avatar: 'C1' },
    { name: 'Channel 2', avatar: 'C2' },
    { name: 'Channel 3', avatar: 'C3' },
    { name: 'Channel 4', avatar: 'C4' },
    { name: 'Channel 5', avatar: 'C5' },
  ];

  const exploreItems = [
    { icon: <TrendingIcon />, text: 'Trending' },
    { icon: <MusicIcon />, text: 'Music' },
    { icon: <GamingIcon />, text: 'Gaming' },
    { icon: <MoviesIcon />, text: 'Movies' },
    { icon: <NewsIcon />, text: 'News' },
    { icon: <SportsIcon />, text: 'Sports' },
    { icon: <LearningIcon />, text: 'Learning' },
    { icon: <PremiumIcon />, text: 'Premium' },
  ];

  const settingsItems = [
    { icon: <SettingsIcon />, text: 'Settings' },
    { icon: <HelpIcon />, text: 'Help' },
    { icon: <FeedbackIcon />, text: 'Send feedback' },
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 1 }}>
        <IconButton onClick={onClose} sx={{ color: 'text.primary' }}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1, py: 0 }}>
        {mainMenuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: isOpen ? 40 : 'auto', color: 'text.primary' }}>
                {item.icon}
              </ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ py: 0 }}>
        {libraryItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: isOpen ? 40 : 'auto', color: 'text.primary' }}>
                {item.icon}
              </ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ py: 0 }}>
        {subscriptions.map((channel) => (
          <ListItem key={channel.name} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: isOpen ? 40 : 'auto' }}>
                <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                  {channel.avatar}
                </Avatar>
              </ListItemIcon>
              {isOpen && <ListItemText primary={channel.name} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ py: 0 }}>
        {exploreItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: isOpen ? 40 : 'auto', color: 'text.primary' }}>
                {item.icon}
              </ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ py: 0 }}>
        {settingsItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: isOpen ? 40 : 'auto', color: 'text.primary' }}>
                {item.icon}
              </ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography variant="caption" color="text.secondary">
          © 2024 Google LLC
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidth : collapsedDrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isOpen ? drawerWidth : collapsedDrawerWidth,
          boxSizing: 'border-box',
          borderRight: 'none',
          bgcolor: 'background.paper',
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};
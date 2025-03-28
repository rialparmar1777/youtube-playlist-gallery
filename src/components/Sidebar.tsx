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
  EmojiEvents as EmojiEventsIcon,
  Diamond as DiamondIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const mainItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Explore', icon: <ExploreIcon />, path: '/explore' },
    { text: 'Subscriptions', icon: <SubscriptionsIcon />, path: '/subscriptions' },
    { text: 'Library', icon: <VideoLibraryIcon />, path: '/library' },
    { text: 'History', icon: <HistoryIcon />, path: '/history' },
  ];

  const secondaryItems = [
    { text: 'Your videos', icon: <PlayCircleIcon />, path: '/your-videos' },
    { text: 'Watch later', icon: <WatchLaterIcon />, path: '/watch-later' },
    { text: 'Liked videos', icon: <ThumbUpIcon />, path: '/liked-videos' },
  ];

  const exploreItems = [
    { text: 'Trending', icon: <TrendingIcon />, path: '/trending' },
    { text: 'Music', icon: <MusicIcon />, path: '/music' },
    { text: 'Gaming', icon: <GamingIcon />, path: '/gaming' },
    { text: 'Movies', icon: <MoviesIcon />, path: '/movies' },
    { text: 'News', icon: <NewsIcon />, path: '/news' },
    { text: 'Live', icon: <LiveIcon />, path: '/live' },
    { text: 'Sports', icon: <SportsIcon />, path: '/sports' },
    { text: 'Learning', icon: <LearningIcon />, path: '/learning' },
  ];

  const moreItems = [
    { text: 'YouTube Premium', icon: <DiamondIcon />, path: '/premium' },
    { text: 'YouTube Music', icon: <MusicIcon />, path: '/music' },
    { text: 'YouTube Kids', icon: <EmojiEventsIcon />, path: '/kids' },
  ];

  const settingsItems = [
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help', icon: <HelpIcon />, path: '/help' },
    { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' },
  ];

  const renderSection = (items: any[], title?: string) => (
    <>
      {title && (
        <Typography
          variant="caption"
          sx={{
            px: 2,
            py: 1,
            color: 'text.secondary',
            display: 'block',
          }}
        >
          {title}
        </Typography>
      )}
      {items.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            onClick={() => navigate(item.path)}
            sx={{
              minHeight: 48,
              px: 2.5,
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
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: 'background.default',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', height: '100%' }}>
        {renderSection(mainItems)}
        <Divider sx={{ my: 1 }} />
        {renderSection(secondaryItems)}
        <Divider sx={{ my: 1 }} />
        {renderSection(exploreItems, 'EXPLORE')}
        <Divider sx={{ my: 1 }} />
        {showMore && renderSection(moreItems)}
        <Button
          startIcon={showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          onClick={() => setShowMore(!showMore)}
          sx={{ width: '100%', justifyContent: 'flex-start', px: 2 }}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
        <Divider sx={{ my: 1 }} />
        {renderSection(settingsItems)}
      </Box>
    </Drawer>
  );
};
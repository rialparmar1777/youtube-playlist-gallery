import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  styled,
  useTheme,
  Theme,
  CSSObject,
  IconButton,
  Collapse
} from '@mui/material';
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  ThumbUp,
  PlaylistPlay,
  WatchLater,
  ExpandMore,
  ExpandLess,
  Settings,
  HelpOutline,
  Feedback,
  MenuBook,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useState } from 'react';

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path?: string;
  nestedItems?: MenuItem[];
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
  const theme = useTheme();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState(false);

  const toggleItemExpansion = (text: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleNavigation = (path?: string) => {
    if (path) {
      // For now, just log the navigation
      console.log('Navigating to:', path);
      if (mobileOpen) handleDrawerToggle();
    }
  };

  const mainMenuItems: MenuItem[] = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Trending', icon: <Whatshot />, path: '/trending' },
    { text: 'Subscriptions', icon: <Subscriptions />, path: '/subscriptions' },
  ];

  const secondaryMenuItems: MenuItem[] = [
    { 
      text: 'Library', 
      icon: <VideoLibrary />,
      nestedItems: [
        { text: 'History', icon: <History />, path: '/history' },
        { text: 'Your videos', icon: <VideoLibrary />, path: '/your-videos' },
        { text: 'Watch later', icon: <WatchLater />, path: '/watch-later' },
        { text: 'Liked videos', icon: <ThumbUp />, path: '/liked-videos' },
        { text: 'Playlists', icon: <PlaylistPlay />, path: '/playlists' },
      ]
    },
  ];

  const settingsMenuItems: MenuItem[] = [
    { text: 'Settings', icon: <Settings />, path: '/settings' },
    { text: 'Help', icon: <HelpOutline />, path: '/help' },
    { text: 'Send feedback', icon: <Feedback />, path: '/feedback' },
    { text: 'Terms & Privacy', icon: <MenuBook />, path: '/terms' },
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <Box key={item.text}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: collapsed ? 'center' : 'initial',
              px: 2.5,
            }}
            onClick={() => {
              if (item.path) {
                handleNavigation(item.path);
              } else if (item.nestedItems) {
                toggleItemExpansion(item.text);
              }
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: collapsed ? 'auto' : 3,
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.text} />}
            {!collapsed && item.nestedItems && (
              expandedItems[item.text] ? <ExpandLess /> : <ExpandMore />
            )}
          </ListItemButton>
        </ListItem>

        {item.nestedItems && (
          <Collapse in={!collapsed && !!expandedItems[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.nestedItems.map((nestedItem) => (
                <ListItemButton
                  key={nestedItem.text}
                  sx={{
                    pl: 8,
                    minHeight: 48,
                    justifyContent: collapsed ? 'center' : 'initial',
                    px: 2.5,
                  }}
                  onClick={() => handleNavigation(nestedItem.path)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: collapsed ? 'auto' : 3,
                      justifyContent: 'center',
                    }}
                  >
                    {nestedItem.icon}
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={nestedItem.text} />}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}
      </Box>
    ));
  };

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Box sx={{ width: drawerWidth }}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          {renderMenuItems(mainMenuItems)}
          <Divider />
          {renderMenuItems(secondaryMenuItems)}
          <Divider />
          {renderMenuItems(settingsMenuItems)}
        </Box>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            ...(!collapsed ? openedMixin(theme) : closedMixin(theme)),
            boxSizing: 'border-box',
            borderRight: 'none',
            backgroundColor: theme.palette.background.default,
          },
        }}
        open={!collapsed}
      >
        <DrawerHeader>
          <IconButton onClick={toggleCollapse}>
            {collapsed ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {renderMenuItems(mainMenuItems)}
        <Divider />
        {renderMenuItems(secondaryMenuItems)}
        <Divider />
        {renderMenuItems(settingsMenuItems)}
      </Drawer>
    </Box>
  );
};
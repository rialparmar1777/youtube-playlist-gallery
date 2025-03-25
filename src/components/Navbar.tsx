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
  Badge,
  styled,
  alpha,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  VideoCall,
  Notifications,
  Apps,
  AccountCircle,
  Mic
} from '@mui/icons-material';
import { useState, useRef, KeyboardEvent } from 'react';

// Styled search component for better visual appearance
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // For now, just log the search query
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'background.paper', 
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        {/* Left section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleMobileMenuOpen}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 }
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ 
                color: 'red', 
                fontWeight: 'bold',
                display: { xs: 'none', sm: 'block' } 
              }}
            >
              YouTube
            </Typography>
          </Box>
        </Box>

        {/* Middle section - Search */}
        <Box sx={{ 
          flexGrow: 1, 
          maxWidth: '720px',
          display: 'flex', 
          justifyContent: 'center'
        }}>
          <Box sx={{ 
            display: 'flex', 
            width: '100%',
            maxWidth: '640px'
          }}>
            <Search sx={{ flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                inputRef={searchInputRef}
              />
            </Search>
            <IconButton 
              type="button" 
              sx={{ 
                ml: 1,
                bgcolor: 'background.default',
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }} 
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
            <IconButton 
              sx={{ 
                ml: 1,
                display: { xs: 'none', sm: 'flex' }
              }}
              aria-label="search by voice"
            >
              <Mic />
            </IconButton>
          </Box>
        </Box>

        {/* Right section */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          justifyContent: 'flex-end'
        }}>
          <IconButton 
            size="large" 
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <VideoCall />
          </IconButton>
          <IconButton 
            size="large" 
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton 
            size="large" 
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Apps />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar 
              sx={{ 
                width: 32, 
                height: 32,
                bgcolor: 'primary.main'
              }}
            >
              <AccountCircle fontSize="small" />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Profile menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Your data in YouTube</MenuItem>
        <MenuItem onClick={handleMenuClose}>Help</MenuItem>
        <MenuItem onClick={handleMenuClose}>Send feedback</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
      </Menu>

      {/* Mobile menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'mobile-menu-button',
        }}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Trending</MenuItem>
        <MenuItem onClick={handleMenuClose}>Subscriptions</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Library</MenuItem>
        <MenuItem onClick={handleMenuClose}>History</MenuItem>
        <MenuItem onClick={handleMenuClose}>Your videos</MenuItem>
        <MenuItem onClick={handleMenuClose}>Watch later</MenuItem>
        <MenuItem onClick={handleMenuClose}>Liked videos</MenuItem>
      </Menu>
    </AppBar>
  );
};
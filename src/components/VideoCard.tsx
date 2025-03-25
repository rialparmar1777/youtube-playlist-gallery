import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  CardActionArea, 
  Box, 
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Skeleton,
  Divider
} from '@mui/material';
import { VideoItem } from '../services/youtubeService';
import { youtubeService } from '../services/youtubeService';
import { 
  MoreVert, 
  WatchLater, 
  PlaylistAdd, 
  Share,
  NotificationsActive,
  NotificationsOff
} from '@mui/icons-material';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface VideoCardProps {
  video: VideoItem;
  onSelect?: (video: VideoItem) => void;
  loading?: boolean;
}

export const VideoCard = ({ video, onSelect, loading = false }: VideoCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(video);
    } else {
      // For now, just log the video selection
      console.log('Selected video:', video.id);
    }
  };

  const handleChannelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // For now, just log the channel click
    console.log('Clicked channel:', video.channelTitle);
  };

  const formatDate = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  if (loading) {
    return (
      <Card sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: 'transparent',
        boxShadow: 'none',
      }}>
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 1 }} />
        <CardContent sx={{ flexGrow: 1, p: 1 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Skeleton variant="circular" width={36} height={36} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="90%" height={24} />
              <Skeleton variant="text" width="70%" height={20} />
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Skeleton variant="text" width="40%" height={16} />
                <Skeleton variant="text" width="40%" height={16} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          cursor: 'pointer',
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea onClick={handleCardClick}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="180"
            image={video.thumbnail}
            alt={video.title}
            sx={{ 
              objectFit: 'cover',
              borderRadius: 1,
              transition: 'all 0.3s ease',
            }}
          />
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              bgcolor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 500,
            }}
          >
            {youtubeService.formatDuration(video.duration)}
          </Typography>
        </Box>
      </CardActionArea>
      <CardContent sx={{ flexGrow: 1, p: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title={video.channelTitle} placement="top">
            <Avatar 
              onClick={handleChannelClick}
              sx={{ 
                width: 36, 
                height: 36, 
                mt: 0.5,
                bgcolor: 'primary.main',
                fontSize: '0.875rem',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9,
                }
              }}
            >
              {video.channelTitle?.[0]?.toUpperCase() || 'C'}
            </Avatar>
          </Tooltip>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="subtitle1" 
              component="div" 
              sx={{ 
                fontWeight: 500,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                mb: 0.5,
                lineHeight: 1.4,
                fontSize: '0.95rem'
              }}
            >
              {video.title}
            </Typography>
            <Tooltip title={video.channelTitle} placement="top">
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  mb: 0.5,
                  '&:hover': {
                    color: 'text.primary',
                  }
                }}
                onClick={handleChannelClick}
              >
                {video.channelTitle}
              </Typography>
            </Tooltip>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                {youtubeService.formatViewCount(video.viewCount)} views
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                •
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                {formatDate(video.publishedAt)}
              </Typography>
            </Box>
          </Box>
          <IconButton 
            size="small" 
            sx={{ 
              alignSelf: 'flex-start',
              visibility: isHovered ? 'visible' : 'hidden'
            }}
            onClick={handleMenuOpen}
          >
            <MoreVert fontSize="small" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={(e) => e.stopPropagation()}
            PaperProps={{
              elevation: 4,
              sx: {
                minWidth: 200,
              }
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <WatchLater fontSize="small" sx={{ mr: 1.5 }} />
              Save to Watch later
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <PlaylistAdd fontSize="small" sx={{ mr: 1.5 }} />
              Save to playlist
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Share fontSize="small" sx={{ mr: 1.5 }} />
              Share
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => {
              setIsSubscribed(!isSubscribed);
              handleMenuClose();
            }}>
              {isSubscribed ? (
                <>
                  <NotificationsOff fontSize="small" sx={{ mr: 1.5 }} />
                  Unsubscribe
                </>
              ) : (
                <>
                  <NotificationsActive fontSize="small" sx={{ mr: 1.5 }} />
                  Subscribe
                </>
              )}
            </MenuItem>
          </Menu>
        </Box>
      </CardContent>
    </Card>
  );
};
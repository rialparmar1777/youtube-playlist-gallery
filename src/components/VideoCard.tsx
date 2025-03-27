import { useState, useCallback, memo } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Divider,
  Stack,
  ButtonBase,
  Skeleton
} from '@mui/material';
import {
  MoreVert,
  ThumbUpOutlined,
  ThumbDownOutlined,
  ShareOutlined,
  PlaylistAddOutlined,
  WatchLaterOutlined,
  NotificationsNoneOutlined,
  NotificationsActiveOutlined
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { VideoItem, youtubeService } from '../services/youtubeService';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
  variant?: 'default' | 'compact';
  loading?: boolean;
}

export const VideoCard = memo(({ 
  video, 
  onSelect, 
  variant = 'default',
  loading = false 
}: VideoCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleMenuClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleCardClick = useCallback(() => {
    onSelect(video);
  }, [onSelect, video]);

  const handleChannelClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('Channel clicked:', video.channelTitle);
  }, [video.channelTitle]);

  const formatDate = useCallback((dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Unknown date';
    }
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  if (loading) {
    return (
      <Card elevation={0} sx={{ width: '100%', bgcolor: 'transparent' }}>
        <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          <Skeleton variant="rectangular" sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
        </Box>
        <CardContent sx={{ p: 1, pt: 1.5, pb: 0 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Skeleton variant="circular" width={36} height={36} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="80%" height={20} />
              <Skeleton variant="text" width="60%" height={16} />
              <Skeleton variant="text" width="40%" height={16} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <ButtonBase
        onClick={handleCardClick}
        sx={{
          display: 'flex',
          width: '100%',
          textAlign: 'left',
          borderRadius: 1,
          overflow: 'hidden',
          '&:hover': {
            backgroundColor: 'action.hover'
          }
        }}
      >
        <Box sx={{ display: 'flex', gap: 1.5, width: '100%' }}>
          <Box sx={{ position: 'relative', width: 168, height: 94, flexShrink: 0 }}>
            <CardMedia
              component="img"
              image={imageError ? '/placeholder-thumbnail.jpg' : video.thumbnail}
              alt={video.title}
              onError={handleImageError}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 1,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                bottom: 4,
                right: 4,
                bgcolor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                px: 0.5,
                borderRadius: 0.5,
                fontSize: '0.7rem',
                fontWeight: 500,
              }}
            >
              {youtubeService.formatDuration(video.duration)}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0, py: 0.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 500,
                mb: 0.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: '0.9rem',
                lineHeight: 1.4,
              }}
            >
              {video.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.8rem', mb: 0.5 }}
            >
              {video.channelTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              {video.views.toLocaleString()} views • {formatDate(video.publishedAt)}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
    );
  }

  return (
    <Card 
      elevation={0}
      sx={{ 
        width: '100%',
        bgcolor: 'transparent',
        '&:hover .video-actions': {
          opacity: 1
        }
      }}
    >
      <ButtonBase
        onClick={handleCardClick}
        sx={{
          width: '100%',
          borderRadius: 1,
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          <CardMedia
            component="img"
            image={imageError ? '/placeholder-thumbnail.jpg' : video.thumbnail}
            alt={video.title}
            onError={handleImageError}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.2s ease-in-out',
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
      </ButtonBase>
      <CardContent sx={{ p: 1, pt: 1.5, pb: 0 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title={video.channelTitle} placement="top">
            <Avatar
              src={video.channelThumbnail}
              alt={video.channelTitle}
              onError={handleImageError}
              sx={{ 
                width: 36, 
                height: 36, 
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9
                }
              }}
              onClick={handleChannelClick}
            />
          </Tooltip>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                mb: 0.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: '0.95rem',
                lineHeight: 1.4,
              }}
            >
              {video.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ 
                fontSize: '0.85rem', 
                mb: 0.5,
                '&:hover': {
                  color: 'text.primary'
                }
              }}
              onClick={handleChannelClick}
            >
              {video.channelTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ 
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              {video.views.toLocaleString()} views • {formatDate(video.publishedAt)}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={handleMenuClick}
            className="video-actions"
            sx={{ 
              alignSelf: 'flex-start',
              opacity: 0,
              transition: 'opacity 0.2s ease',
              '&:focus': {
                opacity: 1
              }
            }}
          >
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={(e) => e.stopPropagation()}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 240,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <ThumbUpOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Like</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <ThumbDownOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Dislike</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <ShareOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Share</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <PlaylistAddOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Save to playlist</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <WatchLaterOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Save to Watch later</Typography>
        </MenuItem>
      </Menu>
    </Card>
  );
});

VideoCard.displayName = 'VideoCard';
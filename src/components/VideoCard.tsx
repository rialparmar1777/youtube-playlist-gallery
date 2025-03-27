import { useState } from 'react';
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
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Share as ShareIcon,
  PlaylistAdd as PlaylistAddIcon,
  WatchLater as WatchLaterIcon,
  Notifications as NotificationsIcon,
  NotificationsOff as NotificationsOffIcon,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { VideoItem } from '../services/youtubeService';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
}

export const VideoCard = ({ video, onSelect }: VideoCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCardClick = () => {
    onSelect(video);
  };

  const handleChannelClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('Channel clicked:', video.channelTitle);
  };

  const formatDate = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        '&:hover': {
          '& .MuiCardMedia-root': {
            transform: 'scale(1.02)',
          },
        },
      }}
      onClick={handleCardClick}
    >
      <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
        <CardMedia
          component="img"
          image={video.thumbnail}
          alt={video.title}
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
          }}
        >
          {video.duration}
        </Typography>
      </Box>
      <CardContent sx={{ p: 1.5 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar
            src={video.channelThumbnail}
            alt={video.channelTitle}
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
            onClick={handleChannelClick}
          />
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
              }}
            >
              {video.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              {video.channelTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              {video.views.toLocaleString()} views • {formatDate(video.publishedAt)}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={handleMenuClick}
            sx={{ 
              alignSelf: 'flex-start',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <MoreVertIcon />
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
            mt: 1.5,
            minWidth: 200,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ThumbUpIcon sx={{ mr: 1 }} /> Like
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ThumbDownIcon sx={{ mr: 1 }} /> Dislike
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ShareIcon sx={{ mr: 1 }} /> Share
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <PlaylistAddIcon sx={{ mr: 1 }} /> Add to playlist
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <WatchLaterIcon sx={{ mr: 1 }} /> Save to watch later
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => {
          setIsSubscribed(!isSubscribed);
          handleMenuClose();
        }}>
          {isSubscribed ? (
            <>
              <NotificationsOffIcon sx={{ mr: 1 }} /> Unsubscribe
            </>
          ) : (
            <>
              <NotificationsIcon sx={{ mr: 1 }} /> Subscribe
            </>
          )}
        </MenuItem>
      </Menu>
    </Card>
  );
};
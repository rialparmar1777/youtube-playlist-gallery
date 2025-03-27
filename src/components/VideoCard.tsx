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
  ButtonBase
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  WatchLater as WatchLaterIcon,
  PlaylistAdd as PlaylistAddIcon,
  Block as BlockIcon,
  Flag as FlagIcon,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { VideoItem } from '../services/youtubeService';
import { youtubeService } from '../services/youtubeService';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
  variant?: 'default' | 'compact';
}

export const VideoCard = ({ video, onSelect, variant = 'default' }: VideoCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showActions, setShowActions] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);
  const handleCardClick = () => onSelect(video);
  const handleChannelClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('Channel clicked:', video.channelTitle);
  };

  const formatDate = (dateString: string) => formatDistanceToNow(new Date(dateString), { addSuffix: true });

  if (variant === 'compact') {
    return (
      <ButtonBase
        onClick={handleCardClick}
        sx={{
          display: 'flex',
          width: '100%',
          textAlign: 'left',
          borderRadius: 2,
          overflow: 'hidden',
          '&:hover': { backgroundColor: 'action.hover' }
        }}
      >
        <Box sx={{ display: 'flex', gap: 1.5, width: '100%', p: 1 }}>
          <Box sx={{ position: 'relative', width: 168, height: 94, flexShrink: 0 }}>
            <CardMedia
              component="img"
              image={video.thumbnailUrl}
              alt={video.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 1,
                transition: 'transform 0.2s ease-in-out',
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
              {video.duration || '0:00'}
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
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 0.5 }}>
              {video.channelTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {youtubeService.formatViewCount(video.viewCount)} views • {formatDate(video.publishedAt)}
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
        position: 'relative',
        '&:hover': {
          '& .video-actions': {
            opacity: 1,
            visibility: 'visible'
          }
        }
      }}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <Box sx={{ position: 'relative', width: '100%', cursor: 'pointer' }}>
        <ButtonBase
          onClick={handleCardClick}
          sx={{
            display: 'block',
            width: '100%',
            position: 'relative',
            paddingTop: '56.25%',
          }}
        >
          <CardMedia
            component="img"
            image={video.thumbnailUrl}
            alt={video.title}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
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
            {video.duration || '0:00'}
          </Typography>
        </ButtonBase>

        <Box
          className="video-actions"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'flex',
            gap: 0.5,
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
          }}
        >
          <Tooltip title="Watch later">
            <IconButton
              size="small"
              sx={{
                bgcolor: 'rgba(33, 33, 33, 0.8)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(33, 33, 33, 0.95)' }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <WatchLaterIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to queue">
            <IconButton
              size="small"
              sx={{
                bgcolor: 'rgba(33, 33, 33, 0.8)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(33, 33, 33, 0.95)' }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <PlaylistAddIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <CardContent sx={{ p: 1, pt: 1.5, pb: '8px !important' }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Tooltip title={video.channelTitle} placement="top">
            <Avatar
              src={video.channelThumbnail}
              alt={video.channelTitle}
              sx={{ 
                width: 36, 
                height: 36, 
                cursor: 'pointer',
                '&:hover': { opacity: 0.9 }
              }}
              onClick={handleChannelClick}
            />
          </Tooltip>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
                  flex: 1,
                  cursor: 'pointer',
                }}
                onClick={handleCardClick}
              >
                {video.title}
              </Typography>
              <IconButton
                size="small"
                onClick={handleMenuClick}
                sx={{ 
                  ml: 1,
                  opacity: showActions ? 1 : 0,
                  visibility: showActions ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
                }}
              >
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ 
                fontSize: '0.85rem', 
                mb: 0.5,
                cursor: 'pointer',
                '&:hover': { color: 'text.primary' }
              }}
              onClick={handleChannelClick}
            >
              {video.channelTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
              {youtubeService.formatViewCount(video.viewCount)} views • {formatDate(video.publishedAt)}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={(e) => e.stopPropagation()}
        PaperProps={{
          sx: {
            width: 250,
            maxWidth: '100%',
            mt: 1,
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            borderRadius: 2,
          }
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <WatchLaterIcon sx={{ mr: 2, fontSize: '1.25rem' }} />
          <Typography variant="body2">Save to Watch later</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <PlaylistAddIcon sx={{ mr: 2, fontSize: '1.25rem' }} />
          <Typography variant="body2">Save to playlist</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <BlockIcon sx={{ mr: 2, fontSize: '1.25rem' }} />
          <Typography variant="body2">Not interested</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <FlagIcon sx={{ mr: 2, fontSize: '1.25rem' }} />
          <Typography variant="body2">Report</Typography>
        </MenuItem>
      </Menu>
    </Card>
  );
};
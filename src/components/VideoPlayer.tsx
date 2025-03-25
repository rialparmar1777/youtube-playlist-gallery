import { 
  Box, 
  Paper, 
  Typography, 
  IconButton, 
  Button, 
  Divider, 
  Avatar, 
  Chip,
  Tooltip,
  Skeleton,
  Collapse,
  Menu,
  MenuItem,
  Stack,
  LinearProgress
} from '@mui/material';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';
import { VideoItem } from '../services/youtubeService';
import { youtubeService } from '../services/youtubeService';
import { 
  ThumbUp, 
  ThumbDown, 
  Share, 
  MoreHoriz,
  PlaylistAdd,
  WatchLater,
  Notifications,
  NotificationsActive,
  ExpandMore,
  ExpandLess,
  Comment,
  AddReaction
} from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { VideoCard } from './VideoCard';

interface VideoPlayerProps {
  video: VideoItem | null;
  loading?: boolean;
  relatedVideos?: VideoItem[];
  onVideoSelect?: (video: VideoItem) => void;
}

export const VideoPlayer = ({ 
  video, 
  loading = false, 
  relatedVideos = [],
  onVideoSelect
}: VideoPlayerProps) => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressInterval = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    const player = event.target;
    setPlayer(player);
    setDuration(player.getDuration());
    
    // Set up progress tracking
    progressInterval.current = setInterval(() => {
      setCurrentTime(player.getCurrentTime());
    }, 1000);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    handleMenuClose();
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleVideoSelect = (selectedVideo: VideoItem) => {
    if (onVideoSelect) {
      onVideoSelect(selectedVideo);
    }
  };

  const formatTime = (seconds: number) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const timeString = date.toISOString().substr(11, 8);
    // Remove leading zeros for hours if needed
    return timeString.startsWith('00:') ? timeString.substr(3) : timeString;
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!player) return;
    
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    
    player.seekTo(newTime, true);
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      color: 'white',
      controls: 1,
    },
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  if (loading) {
    return (
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' }}>
          <Skeleton variant="rectangular" sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0 
          }} />
        </Box>
        
        <Box sx={{ px: 2 }}>
          <Skeleton variant="text" width="80%" height={40} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </Box>
            <Skeleton variant="rectangular" width={100} height={36} />
          </Box>
          <Skeleton variant="rectangular" height={120} sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Skeleton variant="rectangular" width={100} height={36} />
            <Skeleton variant="rectangular" width={40} height={36} />
            <Skeleton variant="rectangular" width={80} height={36} sx={{ ml: 'auto' }} />
            <Skeleton variant="rectangular" width={40} height={36} />
          </Box>
        </Box>
      </Box>
    );
  }

  if (!video) {
    return (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
          p: 3,
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Select a video to play
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Video Player */}
      <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' }}>
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          bgcolor: 'black',
          borderRadius: 1,
          overflow: 'hidden'
        }}>
          <YouTube
            videoId={video.id}
            opts={opts}
            onReady={onPlayerReady}
            onError={(e) => console.error('YouTube player error:', e)}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Box>

      {/* Progress bar */}
      <Box sx={{ width: '100%', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {formatTime(Math.floor(currentTime))}
          </Typography>
          <Box 
            sx={{ 
              flex: 1, 
              height: 4,
              bgcolor: 'action.hover',
              borderRadius: 2,
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={handleProgressClick}
          >
            <LinearProgress 
              variant="determinate" 
              value={duration > 0 ? (currentTime / duration) * 100 : 0} 
              sx={{ 
                height: '100%',
                borderRadius: 2,
                '& .MuiLinearProgress-bar': {
                  borderRadius: 2,
                }
              }}
            />
          </Box>
          <Typography variant="caption" color="text.secondary">
            {formatTime(Math.floor(duration))}
          </Typography>
        </Box>
      </Box>

      {/* Video Info */}
      <Box sx={{ px: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
          {video.title}
        </Typography>

        {/* Channel Info */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2, 
          mb: 2,
          flexWrap: 'wrap'
        }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              {video.channelTitle?.[0]?.toUpperCase() ?? 'C'}
            </Avatar>
            <Box>
              <Typography variant="subtitle2">{video.channelTitle}</Typography>
              <Typography variant="caption" color="text.secondary">
                {youtubeService.formatViewCount(video.subscriberCount || '0')} subscribers
              </Typography>
            </Box>
          </Box>
          
          <Stack direction="row" spacing={1} sx={{ ml: 'auto' }}>
            <Button 
              variant="contained" 
              color={isSubscribed ? 'inherit' : 'error'}
              startIcon={isSubscribed ? <NotificationsActive /> : <Notifications />}
              onClick={handleSubscribe}
              sx={{ borderRadius: '20px' }}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </Stack>
        </Box>

        {/* Video Stats and Description */}
        <Paper sx={{ p: 2, mb: 2, borderRadius: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            mb: 1,
            flexWrap: 'wrap'
          }}>
            <Typography variant="body2" color="text.secondary">
              {youtubeService.formatViewCount(video.viewCount)} views
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })}
            </Typography>
          </Box>
          
          <Collapse in={showDescription} collapsedSize={60}>
            <Typography 
              variant="body2" 
              sx={{ 
                whiteSpace: 'pre-line',
                lineHeight: 1.6
              }}
            >
              {video.description || 'No description available'}
            </Typography>
          </Collapse>
          
          <Button
            size="small"
            startIcon={showDescription ? <ExpandLess /> : <ExpandMore />}
            onClick={() => setShowDescription(!showDescription)}
            sx={{ mt: 1 }}
          >
            {showDescription ? 'Show less' : 'Show more'}
          </Button>
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          mb: 2,
          flexWrap: 'wrap'
        }}>
          <Tooltip title="Like">
            <Button
              startIcon={<ThumbUp />}
              variant="outlined"
              sx={{ borderRadius: '20px' }}
            >
              {youtubeService.formatViewCount(video.likeCount || '0')}
            </Button>
          </Tooltip>
          
          <Tooltip title="Dislike">
            <IconButton sx={{ borderRadius: '8px' }}>
              <ThumbDown />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Share">
            <Button
              startIcon={<Share />}
              variant="outlined"
              sx={{ borderRadius: '20px' }}
            >
              Share
            </Button>
          </Tooltip>
          
          <Tooltip title="More actions">
            <IconButton 
              sx={{ borderRadius: '8px', ml: 'auto' }}
              onClick={handleMenuOpen}
            >
              <MoreHoriz />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuItemClick}>
              <WatchLater sx={{ mr: 1.5 }} fontSize="small" />
              Save to Watch later
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
              <PlaylistAdd sx={{ mr: 1.5 }} fontSize="small" />
              Save to playlist
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
              <Comment sx={{ mr: 1.5 }} fontSize="small" />
              Add comment
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
              <AddReaction sx={{ mr: 1.5 }} fontSize="small" />
              Add reaction
            </MenuItem>
          </Menu>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Categories */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
          <Chip label={video.category || 'Uncategorized'} color="primary" />
          <Chip label="All" />
          <Chip label="Related" />
          {video.tags?.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Box>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Related Videos
            </Typography>
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {relatedVideos.map((relatedVideo) => (
                <Box 
                  key={relatedVideo.id}
                  onClick={() => handleVideoSelect(relatedVideo)}
                  sx={{ cursor: 'pointer' }}
                >
                  <VideoCard video={relatedVideo} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
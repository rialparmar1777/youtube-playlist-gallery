import { 
  Box, 
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
  LinearProgress,
  ButtonBase,
  Paper
} from '@mui/material';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';
import { VideoItem } from '../services/youtubeService';
import { youtubeService } from '../services/youtubeService';
import { 
  ThumbUpOutlined, 
  ThumbDownOutlined, 
  ShareOutlined, 
  MoreHoriz,
  PlaylistAddOutlined,
  WatchLaterOutlined,
  NotificationsNoneOutlined,
  NotificationsActiveOutlined,
  ExpandMore,
  ExpandLess,
  SubscriptionsOutlined
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
    const player = event.target as YouTubePlayer;
    setPlayer(player);
    setDuration(player.getDuration());
    
    // Clear any existing interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    
    // Set up new interval
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

  // Cleanup interval on unmount or when video changes
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [video?.id]); // Add video.id as dependency to reset interval when video changes

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
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Video Player */}
      <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' }}>
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          bgcolor: 'black',
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

      {/* Video Info */}
      <Box sx={{ px: { xs: 1.5, sm: 2 }, pt: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
          {video.title}
        </Typography>

        {/* Video Actions */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          mb: 2,
          flexWrap: 'wrap'
        }}>
          <Typography variant="body2" color="text.secondary">
            {youtubeService.formatViewCount(video.viewCount.toString())} views
          </Typography>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
            <Tooltip title="Like">
              <Button
                startIcon={<ThumbUpOutlined />}
                variant="text"
                size="small"
                sx={{ 
                  borderRadius: '18px',
                  color: 'text.primary',
                  '& .MuiButton-startIcon': {
                    mr: 0.5
                  }
                }}
              >
                {youtubeService.formatViewCount(video.viewCount.toString())}
              </Button>
            </Tooltip>
            
            <Tooltip title="Dislike">
              <Button
                startIcon={<ThumbDownOutlined />}
                variant="text"
                size="small"
                sx={{ 
                  borderRadius: '18px',
                  color: 'text.primary',
                  '& .MuiButton-startIcon': {
                    mr: 0.5
                  }
                }}
              >
              </Button>
            </Tooltip>
            
            <Tooltip title="Share">
              <Button
                startIcon={<ShareOutlined />}
                variant="text"
                size="small"
                sx={{ 
                  borderRadius: '18px',
                  color: 'text.primary',
                  '& .MuiButton-startIcon': {
                    mr: 0.5
                  }
                }}
              >
                Share
              </Button>
            </Tooltip>
            
            <Tooltip title="More actions">
              <IconButton 
                size="small"
                onClick={handleMenuOpen}
                sx={{ 
                  color: 'text.primary',
                }}
              >
                <MoreHoriz />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
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
                <PlaylistAddOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
                <Typography variant="body2">Save to playlist</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
                <WatchLaterOutlined sx={{ mr: 1.5, fontSize: '1.2rem' }} />
                <Typography variant="body2">Save to Watch later</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Channel Info */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2, 
          py: 1.5,
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ButtonBase 
              sx={{ borderRadius: '50%' }}
              onClick={() => console.log('Channel clicked')}
            >
              <Avatar 
                src={video.channelThumbnail}
                sx={{ 
                  width: 48, 
                  height: 48,
                }}
              />
            </ButtonBase>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {video.channelTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                {youtubeService.formatViewCount(video.viewCount.toString())} subscribers
              </Typography>
            </Box>
          </Box>
          
          <Button 
            variant={isSubscribed ? 'outlined' : 'contained'}
            color={isSubscribed ? 'inherit' : 'error'}
            startIcon={isSubscribed ? <NotificationsActiveOutlined /> : <SubscriptionsOutlined />}
            onClick={handleSubscribe}
            sx={{ 
              borderRadius: '18px',
              ml: 'auto',
              px: 2,
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': {
                bgcolor: isSubscribed ? 'action.hover' : 'error.dark'
              }
            }}
          >
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </Button>
        </Box>

        {/* Video Description */}
        <Paper elevation={0} sx={{ my: 2, p: 2, borderRadius: 2, bgcolor: 'background.default' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            mb: 1,
            flexWrap: 'wrap'
          }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {youtubeService.formatViewCount(video.viewCount.toString())} views
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })}
            </Typography>
          </Box>
          
          <Collapse in={showDescription} collapsedSize={72}>
            <Typography 
              variant="body2" 
              sx={{ 
                whiteSpace: 'pre-line',
                lineHeight: 1.6,
                fontSize: '0.9rem'
              }}
            >
              {video.description || 'No description available'}
            </Typography>
          </Collapse>
          
          <Button
            size="small"
            startIcon={showDescription ? <ExpandLess /> : <ExpandMore />}
            onClick={() => setShowDescription(!showDescription)}
            sx={{ 
              mt: 1,
              color: 'text.primary',
              fontWeight: 500,
              textTransform: 'none'
            }}
          >
            {showDescription ? 'Show less' : 'Show more'}
          </Button>
        </Paper>

        {/* Comments Section Placeholder */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Comments
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            mb: 3
          }}>
            <Avatar sx={{ width: 40, height: 40 }} />
            <Typography variant="body2" color="text.secondary">
              Comments are turned off. Learn more
            </Typography>
          </Box>
        </Box>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
              Related Videos
            </Typography>
            <Box sx={{ display: 'grid', gap: 2 }}>
              {relatedVideos.map((relatedVideo) => (
                <Box 
                  key={relatedVideo.id}
                  onClick={() => handleVideoSelect(relatedVideo)}
                  sx={{ cursor: 'pointer' }}
                >
                  <VideoCard video={relatedVideo} onSelect={handleVideoSelect} variant="compact" />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
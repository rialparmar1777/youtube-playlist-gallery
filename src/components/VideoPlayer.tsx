import { 
  Box, 
  Typography, 
  IconButton, 
  Button, 
  Avatar, 
  Tooltip,
  Collapse,
  Menu,
  MenuItem,
  ButtonBase,
  Paper,
} from '@mui/material';
import YouTube, { YouTubeProps } from 'react-youtube';
import { VideoItem } from '../services/youtubeService';
import { youtubeService } from '../services/youtubeService';
import { 
  ThumbUp, 
  ThumbDown, 
  Share, 
  MoreVert,
  PlaylistAdd,
  Notifications,
  Subscriptions,
  WatchLater,
  ArrowBack,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { VideoCard } from './VideoCard';

interface VideoPlayerProps {
  video: {
    id: string;
    title: string;
    channelTitle: string;
    viewCount: string;
    publishedAt: string;
    description: string;
    likeCount: string;
    channelThumbnail: string;
    subscriberCount: string;
  };
  relatedVideos: VideoItem[];
  onVideoSelect: (video: VideoItem) => void;
  onBack: () => void;
}

export const VideoPlayer = ({ 
  video, 
  relatedVideos,
  onVideoSelect,
  onBack
}: VideoPlayerProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  // YouTube player configuration
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

  // Event handlers
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // The event parameter contains the YouTube player instance
    // We can use it to control the player if needed
    const player = event.target;
    console.log('Player is ready', player);
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
    onVideoSelect(selectedVideo);
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  // Render components
  const renderVideoPlayer = () => (
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
  );

  const renderVideoActions = () => (
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
      <Typography variant="body2" color="text.secondary">•</Typography>
      <Typography variant="body2" color="text.secondary">
        {formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })}
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
        <Tooltip title="Like">
          <Button
            startIcon={<ThumbUp />}
            variant="text"
            size="small"
            sx={{ 
              borderRadius: '18px',
              color: 'text.primary',
              '& .MuiButton-startIcon': { mr: 0.5 }
            }}
          >
            {youtubeService.formatViewCount(video.likeCount || '0')}
          </Button>
        </Tooltip>
        
        <Tooltip title="Dislike">
          <Button
            startIcon={<ThumbDown />}
            variant="text"
            size="small"
            sx={{ 
              borderRadius: '18px',
              color: 'text.primary',
              '& .MuiButton-startIcon': { mr: 0.5 }
            }}
          />
        </Tooltip>
        
        <Tooltip title="Share">
          <Button
            startIcon={<Share />}
            variant="text"
            size="small"
            sx={{ 
              borderRadius: '18px',
              color: 'text.primary',
              '& .MuiButton-startIcon': { mr: 0.5 }
            }}
          >
            Share
          </Button>
        </Tooltip>
        
        <Tooltip title="More actions">
          <IconButton 
            size="small"
            onClick={handleMenuOpen}
            sx={{ color: 'text.primary' }}
          >
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );

  const renderChannelInfo = () => (
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
            sx={{ width: 48, height: 48 }}
          />
        </ButtonBase>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {video.channelTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            {youtubeService.formatViewCount(video.subscriberCount || '0')} subscribers
          </Typography>
        </Box>
      </Box>
      
      <Button 
        variant={isSubscribed ? 'outlined' : 'contained'}
        color={isSubscribed ? 'inherit' : 'error'}
        startIcon={isSubscribed ? <Notifications /> : <Subscriptions />}
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
  );

  const renderDescription = () => (
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
        <Typography variant="body2" color="text.secondary">•</Typography>
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
  );

  const renderComments = () => (
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
  );

  const renderRelatedVideos = () => (
    relatedVideos.length > 0 && (
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
    )
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Back button for mobile */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', p: 1 }}>
        <IconButton onClick={onBack}>
          <ArrowBack />
        </IconButton>
      </Box>

      {/* Main content */}
      {renderVideoPlayer()}
      
      <Box sx={{ px: { xs: 1.5, sm: 2 }, pt: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
          {video.title}
        </Typography>

        {renderVideoActions()}
        {renderChannelInfo()}
        {renderDescription()}
        {renderComments()}
        {renderRelatedVideos()}
      </Box>

      {/* More actions menu */}
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
          <PlaylistAdd sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Save to playlist</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1 }}>
          <WatchLater sx={{ mr: 1.5, fontSize: '1.2rem' }} />
          <Typography variant="body2">Save to Watch later</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
import { Box, Skeleton } from '@mui/material';
import { VideoItem } from '../services/youtubeService';
import { VideoCard } from './VideoCard';

interface VideoGridProps {
  videos: VideoItem[];
  loading: boolean;
  onVideoSelect: (video: VideoItem) => void;
}

export const VideoGrid = ({ videos, loading, onVideoSelect }: VideoGridProps) => {
  const getGridColumns = () => ({
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
    xl: 'repeat(5, 1fr)'
  });

  const renderSkeletons = () => {
    const skeletons = [];
    const skeletonCount = 12;
    
    for (let i = 0; i < skeletonCount; i++) {
      skeletons.push(
        <Box key={i} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Skeleton variant="rectangular" width="100%" sx={{ aspectRatio: '16/9', borderRadius: 2 }} />
          <Box sx={{ display: 'flex', gap: 1, pt: 1 }}>
            <Skeleton variant="circular" width={36} height={36} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="90%" height={20} sx={{ mb: 0.5 }} />
              <Skeleton variant="text" width="60%" height={20} sx={{ mb: 0.5 }} />
              <Skeleton variant="text" width="40%" height={20} />
            </Box>
          </Box>
        </Box>
      );
    }
    return skeletons;
  };

  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: { xs: 2, sm: 3 },
      width: '100%',
      maxWidth: '2560px',
      mx: 'auto',
      px: { xs: 2, sm: 3 },
      py: { xs: 2, sm: 3 },
      bgcolor: 'background.default'
    }}>
      {loading ? renderSkeletons() : videos.map((video) => (
        <VideoCard key={video.id} video={video} onSelect={onVideoSelect} />
      ))}
    </Box>
  );
};
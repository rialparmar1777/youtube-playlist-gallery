import { Box, Skeleton } from '@mui/material';
import { VideoItem } from '../services/youtubeService';
import { VideoCard } from './VideoCard';

interface VideoGridProps {
  videos: VideoItem[];
  loading: boolean;
  onVideoSelect: (video: VideoItem) => void;
}

export const VideoGrid = ({ videos, loading, onVideoSelect }: VideoGridProps) => {
  // YouTube's exact responsive breakpoints and column counts
  const getGridColumns = () => {
    return {
      xs: '1fr', // 1 column on extra small screens
      sm: 'repeat(2, 1fr)', // 2 columns on small screens
      md: 'repeat(3, 1fr)', // 3 columns on medium screens
      lg: 'repeat(4, 1fr)', // 4 columns on large screens
      xl: 'repeat(5, 1fr)' // 5 columns on extra large screens
    };
  };

  // YouTube's exact gap sizes
  const getGridGap = () => {
    return {
      xs: '8px', // 8px gap on mobile
      sm: '16px', // 16px gap on larger screens
    };
  };

  // Skeleton loading placeholders
  const renderSkeletons = () => {
    const skeletons = [];
    const skeletonCount = 12; // YouTube loads 12 skeletons initially
    
    for (let i = 0; i < skeletonCount; i++) {
      skeletons.push(
        <Box key={i} sx={{ aspectRatio: '16/9' }}>
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="100%"
            sx={{ borderRadius: '10px' }}
          />
          <Box sx={{ display: 'flex', mt: 1, gap: 1 }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="50%" />
            </Box>
          </Box>
        </Box>
      );
    }
    return skeletons;
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: getGridColumns(),
        gap: getGridGap(),
        p: { xs: '8px', sm: '16px' },
        maxWidth: '2560px', // YouTube's max content width
        mx: 'auto',
        '&:hover .video-actions': {
          opacity: 1 // Show action buttons on hover
        }
      }}
    >
      {loading ? (
        renderSkeletons()
      ) : (
        videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onSelect={onVideoSelect}
          />
        ))
      )}
    </Box>
  );
};
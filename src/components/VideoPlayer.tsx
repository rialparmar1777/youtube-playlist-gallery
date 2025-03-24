import { Box, Paper, Typography } from '@mui/material';
import YouTube from 'react-youtube';
import { VideoItem } from '../services/youtubeService';

interface VideoPlayerProps {
  video: VideoItem | null;
}

export const VideoPlayer = ({ video }: VideoPlayerProps) => {
  if (!video) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Select a video to play
        </Typography>
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
        <YouTube
          videoId={video.id}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: 1,
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
        {video.title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {video.description}
      </Typography>
    </Paper>
  );
}; 
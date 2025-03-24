import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, CircularProgress, Alert, Paper } from '@mui/material';
import { VideoCard } from './components/VideoCard';
import { VideoPlayer } from './components/VideoPlayer';
import { youtubeService, VideoItem } from './services/youtubeService';

function App() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const playlistVideos = await youtubeService.getPlaylistVideos();
        
        if (playlistVideos.length === 0) {
          setError('No videos found in the playlist. Please make sure the playlist is public and contains videos.');
          return;
        }
        
        setVideos(playlistVideos);
      } catch (err: any) {
        console.error('Error fetching videos:', err);
        setError(err.message || 'Failed to load videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography>Loading videos...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
          <Typography variant="body1" color="text.secondary" paragraph>
            Troubleshooting steps:
          </Typography>
          <ul>
            <li>Make sure the playlist is public</li>
            <li>Verify the playlist ID is correct</li>
            <li>Check if the playlist contains videos</li>
            <li>Ensure your API key is valid and has not exceeded its quota</li>
          </ul>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Video Tutorial Gallery
      </Typography>
      
      <VideoPlayer video={selectedVideo} />

      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <VideoCard video={video} onSelect={setSelectedVideo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;

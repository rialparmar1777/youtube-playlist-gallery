import { useState, useEffect } from 'react';
import { Box, CssBaseline, Container, Grid, Typography, CircularProgress, Alert, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { VideoCard } from './components/VideoCard';
import { VideoPlayer } from './components/VideoPlayer';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { youtubeService, VideoItem } from './services/youtubeService';

const drawerWidth = 240;

function App() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await youtubeService.getRandomVideos();
      setVideos(data);
      setSelectedVideo(null);
    } catch (err: any) {
      console.error('Error fetching videos:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Typography variant="body1" paragraph>
          Troubleshooting steps:
        </Typography>
        <ul>
          <li>Check your internet connection</li>
          <li>Verify your API key is valid and has not exceeded its quota</li>
          <li>Try refreshing the page</li>
        </ul>
        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={fetchVideos}
          sx={{ mt: 2 }}
        >
          Try Again
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: '64px', // Height of the navbar
        }}
      >
        <Container maxWidth="xl">
          {selectedVideo ? (
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <VideoPlayer video={selectedVideo} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">Up next</Typography>
                  <Button
                    variant="outlined"
                    startIcon={<RefreshIcon />}
                    onClick={fetchVideos}
                    size="small"
                  >
                    Get New Videos
                  </Button>
                </Box>
                <Grid container spacing={2}>
                  {videos
                    .filter(video => video.id !== selectedVideo.id)
                    .map((video) => (
                      <Grid item xs={12} key={video.id}>
                        <VideoCard video={video} onSelect={handleVideoSelect} />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <>
              <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4">Recommended Videos</Typography>
                <Button
                  variant="contained"
                  startIcon={<RefreshIcon />}
                  onClick={fetchVideos}
                >
                  Get New Videos
                </Button>
              </Box>
              <Grid container spacing={3}>
                {videos.map((video) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
                    <VideoCard video={video} onSelect={handleVideoSelect} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default App;

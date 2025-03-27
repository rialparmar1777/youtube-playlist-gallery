import { useState, useEffect } from 'react';
import { 
  Box, 
  CssBaseline, 
  Container, 
  Grid, 
  Typography, 
  CircularProgress, 
  Alert, 
  Button,
  Chip,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { VideoCard } from './components/VideoCard';
import { VideoPlayer } from './components/VideoPlayer';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { youtubeService, VideoItem } from './services/youtubeService';

const drawerWidth = 240;

const categories = [
  'All',
  'Music',
  'Gaming',
  'Live',
  'News',
  'Sports',
  'Technology',
  'Education',
  'Entertainment',
  'Comedy',
  'Fashion',
  'Travel',
];

function App() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      <Navbar onMenuClick={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: '56px', // Height of the navbar
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
              {/* Categories */}
              <Box sx={{ 
                position: 'sticky', 
                top: '56px', 
                bgcolor: 'background.paper',
                zIndex: 1,
                py: 1,
                borderBottom: '1px solid',
                borderColor: 'divider',
                mb: 2,
              }}>
                <Stack 
                  direction="row" 
                  spacing={1} 
                  sx={{ 
                    overflowX: 'auto',
                    pb: 1,
                    '&::-webkit-scrollbar': {
                      height: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '4px',
                    },
                  }}
                >
                  {categories.map((category) => (
                    <Chip
                      key={category}
                      label={category}
                      onClick={() => setSelectedCategory(category)}
                      sx={{
                        bgcolor: selectedCategory === category ? 'text.primary' : 'action.hover',
                        color: selectedCategory === category ? 'background.paper' : 'text.primary',
                        '&:hover': {
                          bgcolor: selectedCategory === category ? 'text.primary' : 'action.selected',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Video Grid */}
              <Grid container spacing={3}>
                {videos.map((video) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
                    <VideoCard video={video} onSelect={handleVideoSelect} />
                  </Grid>
                ))}
              </Grid>

              {/* Load More Button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  startIcon={<RefreshIcon />}
                  onClick={fetchVideos}
                  sx={{ 
                    px: 4,
                    py: 1,
                    borderRadius: '20px',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  Load More
                </Button>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default App;
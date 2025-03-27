import { useState, useEffect } from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery, Backdrop } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoCard } from './components/VideoCard';
import { CategoryCarousel } from './components/CategoryCarousel';
import { youtubeService } from './services/youtubeService';
import { VideoItem } from './services/youtubeService';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [relatedVideos, setRelatedVideos] = useState<VideoItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleVideoSelect = async (video: VideoItem) => {
    setSelectedVideo(video);
    setLoading(true);
    try {
      const related = await youtubeService.getRelatedVideos(video.id);
      setRelatedVideos(related);
    } catch (error) {
      console.error('Error fetching related videos:', error);
    }
    setLoading(false);
  };

  const loadVideos = async () => {
    setLoading(true);
    try {
      const fetchedVideos = await youtubeService.getRandomVideos();
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar 
        onMenuClick={handleDrawerToggle} 
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        isOpen={isSidebarOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 2 },
          width: { sm: `calc(100% - ${isSidebarOpen ? drawerWidth : 0}px)` },
          ml: { sm: `${isSidebarOpen ? drawerWidth : 0}px` },
          mt: '64px',
          height: 'calc(100vh - 64px)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          position: 'relative',
        }}
      >
        {/* Glass Effect Overlay */}
        {isSidebarOpen && (
          <Backdrop
            sx={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(4px)',
              zIndex: (theme) => theme.zIndex.drawer - 1,
              display: { xs: 'none', sm: 'block' },
            }}
            open={isSidebarOpen}
            onClick={handleSidebarToggle}
          />
        )}

        {selectedVideo ? (
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <VideoPlayer
              video={selectedVideo}
              loading={loading}
              relatedVideos={relatedVideos}
              onVideoSelect={handleVideoSelect}
            />
          </Box>
        ) : (
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            {/* Category Carousel */}
            <CategoryCarousel
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            {/* Video Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                  xl: 'repeat(5, 1fr)'
                },
                gap: { xs: 1, sm: 2 },
                p: { xs: 0.5, sm: 1 },
                transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                ml: { sm: isSidebarOpen ? 0 : -drawerWidth },
              }}
            >
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onSelect={handleVideoSelect}
                  loading={loading}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
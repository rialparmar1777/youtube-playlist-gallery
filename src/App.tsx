import { useState, useEffect, useCallback } from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CategoryCarousel } from './components/CategoryCarousel';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoItem, youtubeService } from './services/youtubeService';

const DRAWER_WIDTH = 240;
const COLLAPSED_DRAWER_WIDTH = 72;

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [relatedVideos, setRelatedVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedVideos = await youtubeService.getRandomVideos();
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRelatedVideos = useCallback(async () => {
    if (selectedVideo) {
      try {
        const related = await youtubeService.getRelatedVideos(selectedVideo.id);
        setRelatedVideos(related);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      }
    }
  }, [selectedVideo]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    fetchRelatedVideos();
  }, [fetchRelatedVideos]);

  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <CssBaseline />
      <Navbar 
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar 
        isOpen={isSidebarOpen}
        drawerWidth={DRAWER_WIDTH}
        collapsedWidth={COLLAPSED_DRAWER_WIDTH}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${isSidebarOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH}px)` },
          ml: { sm: `${isSidebarOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH}px` },
          mt: '56px',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          minHeight: 'calc(100vh - 56px)',
          bgcolor: 'background.default',
        }}
      >
        {selectedVideo ? (
          <VideoPlayer
            video={selectedVideo}
            relatedVideos={relatedVideos}
            onVideoSelect={handleVideoSelect}
            onBack={() => setSelectedVideo(null)}
          />
        ) : (
          <>
            <CategoryCarousel
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <VideoGrid
              videos={videos}
              loading={loading}
              onVideoSelect={handleVideoSelect}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default App;
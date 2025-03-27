import { Box, Button, IconButton, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';

interface CategoryCarouselProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = [
  'All',
  'Music',
  'Gaming',
  'Live',
  'News',
  'Sports',
  'Education',
  'Entertainment',
  'Technology',
  'Science',
  'Travel',
  'Food',
  'Fashion',
  'Art',
  'Comedy',
  'Fitness',
  'Business',
  'Politics'
];

export const CategoryCarousel = ({ selectedCategory, onCategorySelect }: CategoryCarouselProps) => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      checkScrollButtons(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
    const newScrollLeft = scrollContainerRef.current.scrollLeft + 
      (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <Box sx={{ 
      position: 'sticky',
      top: '56px',
      zIndex: 100,
      bgcolor: 'background.default',
      borderBottom: '1px solid',
      borderColor: 'divider',
      py: 0.75,
      px: { xs: 2, sm: 3 },
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }}>
      {showLeftArrow && (
        <Box
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: -24,
              width: 24,
              height: '100%',
              background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
              pointerEvents: 'none',
            }
          }}
        >
          <IconButton
            onClick={() => scroll('left')}
            size="small"
            sx={{
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
        </Box>
      )}
      
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          gap: 1.5,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          flex: 1,
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => onCategorySelect(category)}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              px: 1.5,
              py: 0.75,
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.43,
              '&.MuiButton-contained': {
                bgcolor: 'text.primary',
                color: 'background.paper',
                '&:hover': {
                  bgcolor: 'text.primary',
                  opacity: 0.9,
                },
              },
              '&.MuiButton-outlined': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                borderColor: 'transparent',
                color: 'text.primary',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  borderColor: 'transparent',
                },
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {showRightArrow && (
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: -24,
              width: 24,
              height: '100%',
              background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
              pointerEvents: 'none',
            }
          }}
        >
          <IconButton
            onClick={() => scroll('right')}
            size="small"
            sx={{
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}; 
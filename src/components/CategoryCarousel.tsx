import { useState, useRef } from 'react';
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

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
  'Science',
  'Technology',
  'Travel',
  'Food',
  'Fashion',
  'Art',
  'Comedy',
];

export const CategoryCarousel = ({ selectedCategory, onCategorySelect }: CategoryCarouselProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ 
      position: 'sticky',
      top: '64px',
      zIndex: 100,
      bgcolor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'divider',
      py: 1,
      px: { xs: 1, sm: 2 }
    }}>
      <Box sx={{ position: 'relative' }}>
        {showLeftArrow && (
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                bgcolor: 'background.paper',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        
        <Box
          ref={scrollContainerRef}
          onScroll={handleScroll}
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            px: { xs: 0, sm: 1 },
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              onClick={() => onCategorySelect(category)}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                whiteSpace: 'nowrap',
                px: 2,
                minWidth: 'auto',
                '&.MuiButton-contained': {
                  bgcolor: 'text.primary',
                  color: 'background.paper',
                  '&:hover': {
                    bgcolor: 'text.primary',
                  },
                },
                '&.MuiButton-outlined': {
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'text.primary',
                  },
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {showRightArrow && (
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                bgcolor: 'background.paper',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}; 
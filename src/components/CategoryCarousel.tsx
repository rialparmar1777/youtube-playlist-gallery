import { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Typography,
  ButtonBase,
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
  'Technology',
  'Education',
  'Entertainment',
  'Comedy',
  'Fashion',
  'Travel',
];

export const CategoryCarousel = ({ selectedCategory, onCategorySelect }: CategoryCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        mb: 2,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: 1,
      }}
    >
      {/* Left Arrow */}
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
              bgcolor: 'action.hover',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}

      {/* Categories Container */}
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
          px: isMobile ? 1 : 4,
        }}
      >
        {categories.map((category) => (
          <ButtonBase
            key={category}
            onClick={() => onCategorySelect(category)}
            sx={{
              py: 0.5,
              px: 2,
              borderRadius: '16px',
              bgcolor: selectedCategory === category ? 'text.primary' : 'action.hover',
              color: selectedCategory === category ? 'background.paper' : 'text.primary',
              whiteSpace: 'nowrap',
              '&:hover': {
                bgcolor: selectedCategory === category ? 'text.primary' : 'action.selected',
              },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: selectedCategory === category ? 500 : 400 }}>
              {category}
            </Typography>
          </ButtonBase>
        ))}
      </Box>

      {/* Right Arrow */}
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
              bgcolor: 'action.hover',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </Box>
  );
}; 
// YouTube API Configuration
export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Video categories for random selection
export const VIDEO_CATEGORIES = [
  'Education',
  'Technology',
  'Science',
  'Entertainment',
  'Music',
  'Gaming',
  'Sports',
  'News',
  'Travel',
  'Food'
];

// Search parameters
export const SEARCH_PARAMS = {
  maxResults: 50,
  type: 'video',
  videoEmbeddable: true,
  videoDuration: 'medium', // short, medium, long
  order: 'rating', // date, rating, relevance, title, viewCount
  relevanceLanguage: 'en'
};

// Note: The API key has a daily quota limit
// - Search operations cost 100 units
// - List operations cost 1 unit
// - Default daily quota is 10,000 units 
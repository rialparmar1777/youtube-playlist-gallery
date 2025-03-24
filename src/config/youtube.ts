// YouTube API Configuration
export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID;
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Note: The API key has a daily quota limit
// - List operations cost 1 unit
// - Search operations cost 100 units
// - Default daily quota is 10,000 units 
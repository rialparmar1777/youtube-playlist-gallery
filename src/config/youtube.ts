// YouTube API Configuration
// To get your API key:
// 1. Go to https://console.cloud.google.com/
// 2. Create a new project or select existing one
// 3. Enable YouTube Data API v3
// 4. Create credentials (API key)

// Your YouTube API Key
export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// Your YouTube Playlist ID
// Get this from your playlist URL: https://www.youtube.com/playlist?list=PLAYLIST_ID
export const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID;

// YouTube API Base URL (no need to change this)
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// API Quota Information
// Free tier includes 10,000 units per day
// Each API call costs different units:
// - List playlist items: 1 unit
// - Get video details: 1 unit
// - Search: 100 units 
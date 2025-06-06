import axios from 'axios';
import { YOUTUBE_API_KEY, YOUTUBE_API_BASE_URL, VIDEO_CATEGORIES, SEARCH_PARAMS } from '../config/youtube';

// Cache implementation
const cache = new Map();
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  channelTitle: string;
  channelThumbnail: string;
  viewCount: string;
  publishedAt: string;
  likeCount?: string;
  subscriberCount?: string;
  duration?: string;
}

const getFromCache = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCache = (key: string, data: any) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
};

export const youtubeService = {
  async getRandomVideos(): Promise<VideoItem[]> {
    try {
      const cacheKey = 'randomVideos';
      const cached = getFromCache(cacheKey);
      if (cached) {
        return cached;
      }

      console.log('Fetching random videos...');
      
      // Get a random category
      const randomCategory = VIDEO_CATEGORIES[Math.floor(Math.random() * VIDEO_CATEGORIES.length)];
      console.log('Selected category:', randomCategory);

      // Search for videos in the selected category
      const response = await axios.get(`${YOUTUBE_API_BASE_URL}/search`, {
        params: {
          part: 'snippet',
          q: randomCategory,
          key: YOUTUBE_API_KEY,
          ...SEARCH_PARAMS
        },
      });

      console.log('Search Response:', response.data);

      if (!response.data.items || response.data.items.length === 0) {
        throw new Error('No videos found');
      }

      // Get video statistics and details for each video
      const videoIds = response.data.items.map((item: any) => item.id.videoId).join(',');
      const statsResponse = await axios.get(`${YOUTUBE_API_BASE_URL}/videos`, {
        params: {
          part: 'statistics,contentDetails,snippet',
          id: videoIds,
          key: YOUTUBE_API_KEY,
        },
      });

      // Combine search results with video statistics
      const videos = response.data.items.map((item: any) => {
        const videoStats = statsResponse.data.items.find(
          (stat: any) => stat.id === item.id.videoId
        );
        
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          channelTitle: item.snippet.channelTitle,
          channelThumbnail: item.snippet.thumbnails.default.url,
          viewCount: videoStats?.statistics?.viewCount || '0',
          publishedAt: item.snippet.publishedAt,
          likeCount: videoStats?.statistics?.likeCount,
          subscriberCount: videoStats?.statistics?.subscriberCount,
          duration: videoStats?.contentDetails?.duration,
        };
      });

      setCache(cacheKey, videos);
      return videos;
    } catch (error: any) {
      console.error('Error fetching videos:', error);
      console.error('Error Response:', error.response?.data);
      
      if (error.response?.data?.error?.message) {
        const errorMessage = error.response.data.error.message;
        if (errorMessage.includes('API key not valid')) {
          throw new Error('Invalid API key. Please check your API key configuration.');
        } else if (errorMessage.includes('quota')) {
          throw new Error('YouTube API quota exceeded. Please try again later.');
        }
        throw new Error(errorMessage);
      }
      
      throw new Error('Failed to fetch videos. Please try again later.');
    }
  },

  async getRelatedVideos(videoId: string): Promise<VideoItem[]> {
    try {
      const cacheKey = `relatedVideos-${videoId}`;
      const cached = getFromCache(cacheKey);
      if (cached) {
        return cached;
      }

      const response = await axios.get(`${YOUTUBE_API_BASE_URL}/search`, {
        params: {
          part: 'snippet',
          relatedToVideoId: videoId,
          key: YOUTUBE_API_KEY,
          ...SEARCH_PARAMS
        }
      });

      if (!response.data.items) {
        return [];
      }

      // Get video statistics for related videos
      const videoIds = response.data.items.map((item: any) => item.id.videoId).join(',');
      const statsResponse = await axios.get(`${YOUTUBE_API_BASE_URL}/videos`, {
        params: {
          part: 'statistics,contentDetails,snippet',
          id: videoIds,
          key: YOUTUBE_API_KEY,
        },
      });

      const relatedVideos = response.data.items.map((item: any) => {
        const videoStats = statsResponse.data.items.find(
          (stat: any) => stat.id === item.id.videoId
        );

        return {
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          channelTitle: item.snippet.channelTitle,
          channelThumbnail: item.snippet.thumbnails.default.url,
          viewCount: videoStats?.statistics?.viewCount || '0',
          publishedAt: item.snippet.publishedAt,
          likeCount: videoStats?.statistics?.likeCount,
          subscriberCount: videoStats?.statistics?.subscriberCount,
          duration: videoStats?.contentDetails?.duration,
        };
      });

      setCache(cacheKey, relatedVideos);
      return relatedVideos;
    } catch (error) {
      console.error('Error fetching related videos:', error);
      return [];
    }
  },

  // Helper function to format view count
  formatViewCount(count: string): string {
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return count;
  },

  // Helper function to format date
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Helper function to format duration
  formatDuration(duration: string): string {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '0:00';

    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    if (hours) {
      return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.padStart(2, '0')}`;
  }
}; 
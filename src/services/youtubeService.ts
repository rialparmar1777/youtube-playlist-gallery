import axios from 'axios';
import { YOUTUBE_API_KEY, YOUTUBE_API_BASE_URL, PLAYLIST_ID } from '../config/youtube';

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

export const youtubeService = {
  async getPlaylistVideos(): Promise<VideoItem[]> {
    try {
      const response = await axios.get(`${YOUTUBE_API_BASE_URL}/playlistItems`, {
        params: {
          part: 'snippet',
          playlistId: PLAYLIST_ID,
          maxResults: 50,
          key: YOUTUBE_API_KEY,
        },
      });

      return response.data.items.map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        description: item.snippet.description,
      }));
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
      throw error;
    }
  },
}; 
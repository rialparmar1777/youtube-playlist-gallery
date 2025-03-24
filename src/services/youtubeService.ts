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
      console.log('Fetching playlist videos...');
      console.log('API Key:', YOUTUBE_API_KEY);
      console.log('Playlist ID:', PLAYLIST_ID);
      console.log('API URL:', `${YOUTUBE_API_BASE_URL}/playlists`);

      // First, verify the playlist exists and is accessible
      const playlistResponse = await axios.get(`${YOUTUBE_API_BASE_URL}/playlists`, {
        params: {
          part: 'snippet,status',
          id: PLAYLIST_ID,
          key: YOUTUBE_API_KEY,
        },
      });

      console.log('Playlist Response:', playlistResponse.data);

      if (!playlistResponse.data.items || playlistResponse.data.items.length === 0) {
        console.error('Playlist Response Error:', playlistResponse.data);
        throw new Error('Playlist not found or is private');
      }

      // Check if playlist is public
      const playlist = playlistResponse.data.items[0];
      console.log('Playlist Status:', playlist.status);
      
      if (playlist.status?.privacyStatus !== 'public') {
        throw new Error(`Playlist is ${playlist.status?.privacyStatus}. Please make it public to view the videos.`);
      }

      // Fetch playlist items
      const response = await axios.get(`${YOUTUBE_API_BASE_URL}/playlistItems`, {
        params: {
          part: 'snippet',
          playlistId: PLAYLIST_ID,
          maxResults: 50,
          key: YOUTUBE_API_KEY,
        },
      });

      console.log('Playlist Items Response:', response.data);

      if (!response.data.items || response.data.items.length === 0) {
        throw new Error('No videos found in the playlist');
      }

      return response.data.items.map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        description: item.snippet.description,
      }));
    } catch (error: any) {
      console.error('Error fetching playlist videos:', error);
      console.error('Error Response:', error.response?.data);
      
      if (error.response?.data?.error?.message) {
        const errorMessage = error.response.data.error.message;
        if (errorMessage.includes('API key not valid')) {
          throw new Error('Invalid API key. Please check your API key configuration.');
        } else if (errorMessage.includes('quota')) {
          throw new Error('YouTube API quota exceeded. Please try again later.');
        } else if (errorMessage.includes('playlist')) {
          throw new Error('Playlist not found or is private. Please check the playlist ID and make sure it\'s public.');
        }
        throw new Error(errorMessage);
      }
      
      throw new Error('Failed to fetch playlist videos. Please try again later.');
    }
  },
}; 
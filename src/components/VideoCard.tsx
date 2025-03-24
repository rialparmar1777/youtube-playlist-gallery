import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { VideoItem } from '../services/youtubeService';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
}

export const VideoCard = ({ video, onSelect }: VideoCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, height: '100%' }}>
      <CardActionArea onClick={() => onSelect(video)}>
        <CardMedia
          component="img"
          height="194"
          image={video.thumbnail}
          alt={video.title}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {video.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {video.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}; 
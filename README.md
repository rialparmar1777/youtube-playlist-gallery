# YouTube Playlist Gallery

A modern, responsive web application that transforms YouTube playlists into beautiful, interactive video galleries. Built with React and TypeScript, this application provides a seamless viewing experience for educational content, tutorials, and video collections.

## 🌟 Features

- **Responsive Grid Layout**: Beautifully organized video thumbnails that adapt to any screen size
- **Interactive Video Player**: Seamless video playback with autoplay functionality
- **Modern UI/UX**: Clean, intuitive interface built with Material-UI
- **Type-Safe Development**: Full TypeScript support for better code quality
- **Error Handling**: Graceful error states and loading indicators
- **Performance Optimized**: Efficient video loading and state management

## 🚀 Live Demo

[View Live Demo](https://your-demo-url.com)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Video Integration**: react-youtube
- **API Client**: Axios
- **Styling**: Emotion (CSS-in-JS)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- YouTube Data API key

## 🔧 Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtube-playlist-gallery.git
cd youtube-playlist-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Configure YouTube API:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API key)
   - Copy your API key and playlist ID

4. Update the configuration:
   - Open `src/config/youtube.ts`
   - Replace `YOUR_API_KEY_HERE` with your YouTube API key
   - Replace `YOUR_PLAYLIST_ID_HERE` with your YouTube playlist ID

5. Start the development server:
```bash
npm run dev
```

## 💡 Usage

1. The application will load the videos from your specified YouTube playlist
2. Click on any video thumbnail to play it in the embedded player
3. Videos will autoplay when selected
4. The grid layout is responsive and will adjust based on screen size

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

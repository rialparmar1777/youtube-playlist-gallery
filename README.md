# YouTube Playlist Gallery

A modern, responsive web application that transforms YouTube playlists into beautiful, interactive video galleries. Built with React and TypeScript, this application provides a seamless viewing experience for educational content, tutorials, and video collections.

## 🌟 Features

- **Responsive Grid Layout**: Beautifully organized video thumbnails that adapt to any screen size
- **Interactive Video Player**: Seamless video playback with autoplay functionality
- **Modern UI/UX**: Clean, intuitive interface built with Material-UI
- **Type-Safe Development**: Full TypeScript support for better code quality
- **Error Handling**: Graceful error states and loading indicators
- **Performance Optimized**: Efficient video loading and state management

<<<<<<< HEAD
## 🚀 Live Demo

[View Live Demo](https://youtube-playlist-gallery-1spb.vercel.app/)

=======
>>>>>>> e3fbb3a (Update README to reflect changes in prerequisites and setup instructions; remove outdated sections, add Firebase authentication details, and clarify deployment process on Vercel.)
## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Video Integration**: react-youtube
- **API Client**: Axios
- **Styling**: Emotion (CSS-in-JS)
- **Authentication**: Firebase
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube Data API key
- Firebase project (for authentication)

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

4. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)

5. Create a `.env` file in the root directory with the following variables:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key
VITE_PLAYLIST_ID=your_playlist_id
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

6. Start the development server:
```bash
npm run dev
```

## 💡 Usage

1. The application will load the videos from your specified YouTube playlist
2. Click on any video thumbnail to play it in the embedded player
3. Videos will autoplay when selected
4. The grid layout is responsive and will adjust based on screen size

## 🚀 Deployment

The application is configured for deployment on Vercel. Simply push your changes to the main branch, and Vercel will automatically deploy them.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community
<<<<<<< HEAD

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
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

Rial Parmar - rialparmar007@gmail.com

## 🙏 Acknowledgments

- YouTube Data API
- Material-UI team
- React community

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube API key
- Firebase project

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

5. Configure Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Enable Firebase Authentication
   - Create credentials (API key, authentication domain, project ID, storage bucket, messaging sender ID, and app ID)
   - Copy your credentials and update the environment variables

6. Start the development server:
```bash
npm run dev
```

## 💡 Usage

1. The application will load the videos from your specified YouTube playlist
2. Click on any video thumbnail to play it in the embedded player
=======
- Firebase team
>>>>>>> e3fbb3a (Update README to reflect changes in prerequisites and setup instructions; remove outdated sections, add Firebase authentication details, and clarify deployment process on Vercel.)

import { Box, Button, Typography, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleAppleSignIn = () => {
    // Apple sign in implementation will be added later
    console.log('Apple sign in clicked');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #0f0f0f 30%, #1a1a1a 90%)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
        py: { xs: 2, sm: 4 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          mx: 'auto',
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Logo and Title */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <YouTubeIcon
            sx={{
              fontSize: { xs: 48, sm: 60 },
              color: 'red',
              mb: 2,
            }}
          />
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h1"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF0000 30%, #FF6B6B 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              mb: 1,
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '3rem' },
            }}
          >
            Welcome to Rial's YouTube Clone
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              textAlign: 'center',
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Sign in to continue to YouTube
          </Typography>
        </Box>

        {/* Login Form */}
        <Paper
          elevation={24}
          sx={{
            p: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 4,
            mx: 'auto',
          }}
        >
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            fullWidth
            size="large"
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 500,
              background: '#fff',
              color: '#000',
              '&:hover': {
                background: '#f5f5f5',
              },
            }}
          >
            Sign in with Google
          </Button>

          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            onClick={handleAppleSignIn}
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 500,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            Sign in with Apple
          </Button>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              mt: 2,
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              maxWidth: '80%',
            }}
          >
            By signing in, you agree to our Terms of Service and Privacy Policy
          </Typography>
        </Paper>

        {/* Footer */}
        <Box
          sx={{
            mt: { xs: 3, sm: 4 },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 1, sm: 2 },
            color: 'text.secondary',
            width: '100%',
            maxWidth: '800px',
            px: { xs: 2, sm: 4 },
          }}
        >
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>About</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>•</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Press</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>•</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Copyright</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>•</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Contact us</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>•</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Creators</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>•</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Advertise</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>•</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Developers</Typography>
        </Box>
      </Container>
    </Box>
  );
};
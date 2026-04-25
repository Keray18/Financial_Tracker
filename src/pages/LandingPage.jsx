import { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Login from '../components/Login'
import Register from '../components/Register'

const LandingPage = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100dvh' },
        minHeight: '100vh',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        background:
          'radial-gradient(circle at 90% 85%, rgba(22, 35, 78, 0.7) 0%, rgba(6, 13, 33, 0.95) 40%, #030815 100%)',
        overflow: { md: 'hidden' },
      }}
    >
      <Box
        sx={{
          px: { xs: 3, md: 4 },
          py: { xs: 4, md: 4.5 },
          borderRight: { md: '1px solid rgba(36, 88, 170, 0.5)' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack direction='row' spacing={1.2} alignItems='center'>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '8px',
              bgcolor: '#F8A400',
              display: 'grid',
              placeItems: 'center',
              color: '#0A122B',
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            FT
          </Box>
          <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: 20 }}>FinTrack</Typography>
        </Stack>

        <Typography
          sx={{
            mt: { xs: 5, md: 7 },
            maxWidth: 390,
            color: '#F8FAFC',
            fontWeight: 700,
            lineHeight: 1.15,
            fontSize: { xs: 42, md: 60 },
            letterSpacing: '-0.03em',
          }}
        >
          Smart Money,
          <br />
          Better Future.
        </Typography>

        <Typography sx={{ mt: 2.6, maxWidth: 420, color: '#6D7EA5', lineHeight: 1.6, fontSize: 16 }}>
          Your personal finance command center.
          <br />
          Track, analyze, and grow your wealth with confidence.
        </Typography>

        <Stack spacing={1.7} sx={{ mt: 3.3 }}>
          {['Real-time balance tracking', 'AI-powered spending insights', 'Bank-grade 256-bit security'].map(
            (item) => (
              <Stack key={item} direction='row' spacing={1.5} alignItems='center'>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F6A313' }} />
                <Typography sx={{ color: '#D9E2FF', fontSize: 17 }}>{item}</Typography>
              </Stack>
            )
          )}
        </Stack>

        <Stack direction='row' spacing={{ xs: 4, md: 6 }} sx={{ mt: 'auto', pt: { xs: 6, md: 5 } }}>
          {[
            { value: '$2.4B', label: 'Managed' },
            { value: '50K+', label: 'Users' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat) => (
            <Box key={stat.label}>
              <Typography sx={{ color: '#F8A400', fontWeight: 700, fontSize: { xs: 26, md: 40 } }}>
                {stat.value}
              </Typography>
              <Typography sx={{ color: '#64759E', fontSize: 14 }}>{stat.label}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, md: 3 },
          py: { xs: 3.5, md: 2 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 360,
            height: 360,
            borderRadius: '50%',
            right: { xs: -120, md: -70 },
            bottom: { xs: -120, md: -80 },
            background: 'radial-gradient(circle, rgba(70, 88, 145, 0.26), rgba(70, 88, 145, 0) 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        {isSignIn ? (
          <Login onCreateAccount={() => setIsSignIn(false)} />
        ) : (
          <Register onSignIn={() => setIsSignIn(true)} />
        )}
      </Box>
    </Box>
  )
}

export default LandingPage

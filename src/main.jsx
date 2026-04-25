import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import App from './App.jsx'
import './index.css'



const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#030815',
    },
  },
  typography: {
    // Manrope gives a clean, premium fintech feel.
    fontFamily: "'Manrope', 'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif",
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 750, letterSpacing: '-0.015em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)

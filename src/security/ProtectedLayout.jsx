import { Box } from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ProtectedLayout = () => {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '180px 1fr' },
        background:
          'radial-gradient(circle at 85% 82%, rgba(55, 72, 122, 0.4) 0%, rgba(6, 14, 34, 0.95) 34%, #030816 100%)',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ minWidth: 0, minHeight: 0 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default ProtectedLayout
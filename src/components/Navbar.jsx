import { Box, Stack, Typography, Button, Avatar } from '@mui/material'

const Navbar = () => {
  const menuItems = ['Dashboard', 'Accounts', 'Transactions', 'Analytics', 'Budgets', 'Settings']

  return (
    <Box
      sx={{
        borderRight: '1px solid rgba(58, 86, 138, 0.4)',
        px: 1.2,
        py: 1.4,
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, rgba(10,24,52,0.92), rgba(8,19,43,0.94))',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <Stack direction='row' spacing={0.9} alignItems='center' sx={{ px: 0.4 }}>
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '6px',
            bgcolor: '#F4A20D',
            color: '#0A122B',
            fontWeight: 800,
            fontSize: 8,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          FT
        </Box>
        <Typography sx={{ fontWeight: 600, color: '#F2F6FF', fontSize: 13 }}>FinTrack</Typography>
      </Stack>

      <Stack spacing={0.4} sx={{ mt: 1.8 }}>
        {menuItems.map((item, i) => (
          <Button
            key={item}
            variant={i === 0 ? 'contained' : 'text'}
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              borderRadius: '7px',
              px: 0.9,
              py: 0.7,
              color: i === 0 ? '#10172B' : '#95A6C8',
              bgcolor: i === 0 ? '#F4A20D' : 'transparent',
              fontSize: 12.5,
              '&:hover': {
                bgcolor: i === 0 ? '#E99809' : 'rgba(31, 54, 96, 0.28)',
              },
            }}
          >
            {item}
          </Button>
        ))}
      </Stack>

      <Box sx={{ mt: 'auto', px: 0.4 }}>
        <Stack direction='row' spacing={0.8} alignItems='center'>
          <Avatar sx={{ width: 22, height: 22, bgcolor: '#1F335B', color: '#F2A316', fontSize: 10 }}>HG</Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ color: '#E0E8FA', fontSize: 11.5, lineHeight: 1.25 }} noWrap>
              Hizen Ghoul
            </Typography>
            <Typography sx={{ color: '#6D81AA', fontSize: 10.5 }}>Pro Account</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Navbar

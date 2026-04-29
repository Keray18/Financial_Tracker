import { Box, Button, Paper, Stack, Switch, TextField, Typography } from '@mui/material'

const sections = [
  { title: 'Profile', subtitle: 'Personal details' },
  { title: 'Notifications', subtitle: 'Alerts & reminders' },
  { title: 'Security', subtitle: 'Password & 2FA' },
  { title: 'Linked Accounts', subtitle: 'Banks & cards' },
  { title: 'Subscription', subtitle: 'Plan & billing' },
]

const toggles = [
  { label: 'Email Notifications', sub: 'Get transaction alerts via email', enabled: true },
  { label: 'Push Notifications', sub: 'Mobile app notifications', enabled: true },
  { label: 'Monthly Reports', sub: 'Receive monthly summary reports', enabled: false },
  { label: 'Two-Factor Auth', sub: 'Extra security on login', enabled: true },
]

const panelSx = {
  borderRadius: '14px',
  border: '1px solid rgba(62, 90, 144, 0.35)',
  bgcolor: 'rgba(10, 22, 49, 0.88)',
  boxShadow: 'none',
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    color: '#DCE6FF',
    borderRadius: '10px',
    backgroundColor: 'rgba(35, 52, 87, 0.4)',
    '& fieldset': { borderColor: 'rgba(71, 95, 143, 0.5)' },
    '&:hover fieldset': { borderColor: 'rgba(105, 130, 180, 0.8)' },
    '&.Mui-focused fieldset': { borderColor: '#F4A20D' },
  },
  '& .MuiInputLabel-root': { color: '#8EA3CC' },
}

const Settings = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 1.6 }, height: '100%', overflow: 'auto' }}>
        <Box>
          <Typography sx={{ fontSize: 18, color: '#F5F8FF', fontWeight: 700 }}>Settings</Typography>
          <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>Manage account, preferences and security</Typography>
        </Box>

        <Box sx={{ mt: 1.3, display: 'grid', gridTemplateColumns: { xs: '1fr', xl: '280px 1fr' }, gap: 1.1 }}>
          <Paper sx={{ ...panelSx, p: 1.2 }}>
            <Typography sx={{ color: '#7084AB', fontSize: 11, mb: 1, fontWeight: 700 }}>SECTIONS</Typography>
            <Stack spacing={0.8}>
              {sections.map((section, index) => (
                <Box
                  key={section.title}
                  sx={{
                    borderRadius: '10px',
                    border: index === 0 ? '1px solid rgba(244,162,13,0.6)' : '1px solid transparent',
                    bgcolor: index === 0 ? 'rgba(34, 52, 90, 0.7)' : 'transparent',
                    p: 1,
                  }}
                >
                  <Typography sx={{ color: index === 0 ? '#EAF0FF' : '#95A8CF', fontSize: 13, fontWeight: 600 }}>
                    {section.title}
                  </Typography>
                  <Typography sx={{ color: '#7388B3', fontSize: 11 }}>{section.subtitle}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>

          <Paper sx={{ ...panelSx, p: 1.8 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 14 }}>Profile</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.2 }}>Update personal details and preferences</Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1 }}>
              <TextField label='First Name' defaultValue='Hizen' size='small' sx={fieldSx} />
              <TextField label='Last Name' defaultValue='Ghoul' size='small' sx={fieldSx} />
              <TextField label='Phone' defaultValue='+91 98765 43210' size='small' sx={fieldSx} />
              <TextField label='Currency' defaultValue='INR - Indian Rupee' size='small' sx={fieldSx} />
            </Box>
            <TextField label='Email Address' defaultValue='hizenghoul@gmail.com' size='small' fullWidth sx={{ ...fieldSx, mt: 1 }} />

            <Typography sx={{ color: '#7084AB', fontSize: 11, mt: 1.6, mb: 0.8, fontWeight: 700 }}>PREFERENCES</Typography>
            <Stack spacing={0.7}>
              {toggles.map((item) => (
                <Stack key={item.label} direction='row' justifyContent='space-between' alignItems='center' sx={{ py: 0.4 }}>
                  <Box>
                    <Typography sx={{ color: '#DFE8FC', fontSize: 13 }}>{item.label}</Typography>
                    <Typography sx={{ color: '#7388B3', fontSize: 11 }}>{item.sub}</Typography>
                  </Box>
                  <Switch checked={item.enabled} color='warning' />
                </Stack>
              ))}
            </Stack>

            <Stack direction='row' spacing={1} sx={{ mt: 1.4 }}>
              <Button variant='contained' sx={{ bgcolor: '#F4A20D', color: '#0F1A35', fontWeight: 700, '&:hover': { bgcolor: '#E99809' } }}>
                Save Changes
              </Button>
              <Button variant='outlined' sx={{ borderColor: 'rgba(87,111,160,0.7)', color: '#C5D4F6' }}>
                Discard
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default Settings

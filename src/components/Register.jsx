import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'

const inputSx = {
  bgcolor: 'rgba(14, 27, 58, 0.96)',
  borderRadius: '9px',
  color: '#E7EEFF',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(60, 83, 133, 0.72)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(88, 116, 182, 0.9)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#F8A400',
  },
  '& input::placeholder': {
    color: '#8EA0C7',
    opacity: 1,
  },
}

const Register = ({ onSignIn }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 430,
        borderRadius: '18px',
        border: '1px solid rgba(66, 89, 135, 0.45)',
        bgcolor: 'rgba(10, 20, 45, 0.9)',
        p: { xs: 2.5, md: 3 },
        color: '#EAF0FF',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 37, lineHeight: 1.06 }}>Create free account</Typography>
      <Typography sx={{ color: '#8192B7', mt: 0.7, mb: 2.5, fontSize: 15 }}>
        Start managing your money smarter today
      </Typography>

      <Stack spacing={1.8}>
        {[
          { label: 'Name', placeholder: 'Enter your full name', type: 'text' },
          { label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
          { label: 'Password', placeholder: 'Create your password', type: 'password' },
          { label: 'Confirm Password', placeholder: 'Confirm your password', type: 'password' },
        ].map((field) => (
          <Box key={field.label}>
            <Typography sx={{ color: '#96A6CA', fontSize: 13, mb: 0.7 }}>{field.label}</Typography>
            <TextField
              fullWidth
              size='small'
              type={field.type}
              placeholder={field.placeholder}
              InputProps={{ sx: inputSx }}
            />
          </Box>
        ))}
      </Stack>

      <Button
        fullWidth
        variant='contained'
        sx={{
          mt: 2,
          bgcolor: '#F8A400',
          color: '#131A30',
          textTransform: 'none',
          borderRadius: '10px',
          py: 1.05,
          fontSize: 20,
          fontWeight: 700,
          '&:hover': { bgcolor: '#E79A03' },
        }}
      >
        Create Account
      </Button>

      <Typography sx={{ mt: 2.2, color: '#7B8EB7', fontSize: 14 }}>
        Already have an account?
        <Button
          variant='text'
          onClick={onSignIn}
          sx={{
            color: '#F8A400',
            textTransform: 'none',
            p: 0,
            minWidth: 'auto',
            ml: 0.6,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Sign in
        </Button>
      </Typography>
    </Paper>
  )
}

export default Register

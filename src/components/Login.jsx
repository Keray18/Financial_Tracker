import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

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

const Login = ({ onCreateAccount }) => {

  const Navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    mail: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const loginHandler = async () => {
    try {
      const { mail, password } = formData 
      if(!mail || !password) {
        console.log("All fields required")
        alert('All fields are required')
        return
      }

      setLoading(true)

      const response = await axios.post("http://localhost:5000/api/login", 
        {
          mail,
          password
        }
      )

      localStorage.setItem("token", response.data.token)
      Navigate('/dashboard')
      alert("User logged in successfully!")
    
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || "Error Loggin In.")
    
    } finally {
      setLoading(false)
    }
  }

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
      <Typography sx={{ fontWeight: 700, fontSize: 41, lineHeight: 1.05 }}>Welcome back</Typography>
      <Typography sx={{ color: '#8192B7', mt: 0.7, mb: 2.5, fontSize: 15 }}>
        Sign in to your FinTrack account
      </Typography>

      <Stack spacing={1.8}>
        <Box>
          <Typography sx={{ color: '#96A6CA', fontSize: 13, mb: 0.7 }}>Email Address</Typography>
          <TextField
            fullWidth
            size='small'
            placeholder='you@example.com'
            name='mail'
            value={formData.mail}
            onChange={handleChange}
            InputProps={{ sx: inputSx }}
          />
        </Box>

        <Box>
          <Typography sx={{ color: '#96A6CA', fontSize: 13, mb: 0.7 }}>Password</Typography>
          <TextField
            fullWidth
            size='small'
            type='password'
            placeholder='Enter your password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            InputProps={{ sx: inputSx }}
          />
        </Box>
      </Stack>

      <Typography sx={{ color: '#F8A400', fontSize: 12, textAlign: 'right', mt: 1, mb: 1.8 }}>
        Forgot password?
      </Typography>

      <Button
        onClick={loginHandler}
        fullWidth
        variant='contained'
        sx={{
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
        {loading ? 'Signing in...' : 'Sign In to FinTrack'}
      </Button>

      <Stack direction='row' alignItems='center' sx={{ my: 2 }}>
        <Divider sx={{ flex: 1, borderColor: 'rgba(99, 121, 170, 0.4)' }} />
        <Typography sx={{ px: 2, color: '#6F82AB', fontSize: 12 }}>or</Typography>
        <Divider sx={{ flex: 1, borderColor: 'rgba(99, 121, 170, 0.4)' }} />
      </Stack>

      <Stack direction='row' spacing={1.5}>
        <Button
          fullWidth
          variant='outlined'
          sx={{
            borderColor: '#2A3C65',
            color: '#C9D7F7',
            textTransform: 'none',
            borderRadius: '10px',
            '&:hover': { borderColor: '#39558C', bgcolor: 'rgba(22, 36, 72, 0.35)' },
          }}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant='outlined'
          sx={{
            borderColor: '#2A3C65',
            color: '#C9D7F7',
            textTransform: 'none',
            borderRadius: '10px',
            '&:hover': { borderColor: '#39558C', bgcolor: 'rgba(22, 36, 72, 0.35)' },
          }}
        >
          Apple
        </Button>
      </Stack>

      <Typography sx={{ mt: 2.2, color: '#7B8EB7', fontSize: 14 }}>
        Don&apos;t have an account?
        <Button
          variant='text'
          onClick={onCreateAccount}
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
          Create free account
        </Button>
      </Typography>

      <Typography
        sx={{
          mt: 2.2,
          border: '1px solid rgba(58, 77, 115, 0.45)',
          borderRadius: '8px',
          py: 0.9,
          px: 1.2,
          color: '#5F729D',
          fontSize: 11,
        }}
      >
        256-bit encryption • SOC 2 compliant • FDIC insured
      </Typography>
    </Paper>
  )
}

export default Login

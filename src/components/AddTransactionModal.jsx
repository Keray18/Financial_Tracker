import { useState } from 'react'
import axios from 'axios'

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

const inputSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(14, 27, 58, 0.96)',
    color: '#E7EEFF',
    borderRadius: '9px',
    '& fieldset': { borderColor: 'rgba(60, 83, 133, 0.72)' },
    '&:hover fieldset': { borderColor: 'rgba(88, 116, 182, 0.9)' },
    '&.Mui-focused fieldset': { borderColor: '#F8A400' },
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#8EA0C7',
    opacity: 1,
  },
  '& input[type="date"]': {
    colorScheme: 'dark',
  },
  '& input[type="date"]::-webkit-calendar-picker-indicator': {
    filter: 'invert(0.9)',
    cursor: 'pointer',
  },
}

const AddTransactionModal = ({ open, onClose, onTransactionSaved }) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    transactionType: '',
    category: '',
    date: '',
    account: '',
    note: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const addTransaction = async () => {
    try {
      const { title, amount, transactionType, category, date, account, note } = formData
      
      if(!title || !amount || !transactionType || !category || !date || !account) {
        console.log("All transaction fields are required.")
        alert("All fields are required!")
        return
      }

      setLoading(true)
      const token = localStorage.getItem('token')

      // const payload = {
      //     title,
      //     amount: Number(amount), 
      //     transactionType: 'Expense',
      //     category: 'Food&Dining',
      //     date: new Date().toISOString().split('T')[0],
      //     account,
      //     note
      // }
      // console.log(payload)

      await axios.post(
        'http://localhost:5000/api/createTransaction',
        {
          title,
          amount: Number(amount),
          transactionType: 'Expense',
          category: 'Food&Dining',
          date: new Date().toISOString().split('T')[0],
          account,
          note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setFormData({
        title: '',
        amount: '',
        transactionType: '',
        category: '',
        date: '',
        account: '',
        note: '',
      })

      onClose()
      onTransactionSaved?.()
    
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || "Transaction failed!")

    } finally {
      setLoading(false)
    }
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='sm'
      sx={{
        '& .MuiDialog-paper': {
          width: 'calc(100% - 24px)',
          maxWidth: 640,
          m: 1.5,
          overflowX: 'hidden',
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: '16px',
          border: '1px solid rgba(62, 90, 144, 0.45)',
          bgcolor: 'rgba(8, 20, 48, 0.98)',
          color: '#EAF0FF',
          backdropFilter: 'blur(4px)',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1.2 }}>
        <Typography sx={{ fontSize: 19, fontWeight: 700, color: '#F3F7FF' }}>Add Transaction</Typography>
        <Typography sx={{ fontSize: 13, color: '#7F93BD', mt: 0.4 }}>
          Fill transaction details. You can wire save logic later.
        </Typography>
      </DialogTitle>
      <Divider sx={{ borderColor: 'rgba(58, 80, 122, 0.35)' }} />

      <DialogContent sx={{ pt: 2, px: { xs: 2, sm: 3 }, overflowX: 'hidden' }}>
        <Stack spacing={1.45}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.3}>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Title</Typography>
              <TextField fullWidth placeholder='e.g. Grocery Store' 
              size='small'
              onChange={handleChange}
              name='title'
              value={formData.title} 
              sx={inputSx} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Amount</Typography>
              <TextField fullWidth placeholder='e.g. 142.30' 
              size='small' 
              onChange={handleChange}
              name='amount'
              value={formData.amount}
              sx={inputSx} />
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.3}>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Type</Typography>
              <TextField fullWidth select
              size='small' 
              onChange={handleChange}
              name='transactionType'
              value={formData.transactionType}
              sx={inputSx}>
                <MenuItem value='expense'>Expense</MenuItem>
                <MenuItem value='income'>Income</MenuItem>
                <MenuItem value='transfer'>Transfer</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Category</Typography>
              <TextField fullWidth select
              size='small' 
              onChange={handleChange}
              name='category'
              value={formData.category}
              sx={inputSx}>
                <MenuItem value='food'>Food & Dining</MenuItem>
                <MenuItem value='transport'>Transport</MenuItem>
                <MenuItem value='housing'>Housing</MenuItem>
                <MenuItem value='entertainment'>Entertainment</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </TextField>
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.3}>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Date</Typography>
              <TextField fullWidth type='date' 
              size='small' 
              onChange={handleChange}
              name='date'
              value={formData.date}
              sx={inputSx} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Account</Typography>
              <TextField fullWidth placeholder='e.g. Primary Checking' 
              size='small' 
              onChange={handleChange}
              name='account'
              value={formData.account}
              sx={inputSx} />
            </Box>
          </Stack>

          <Box sx={{ width: '100%' }}>
            <Typography sx={{ color: '#96A6CA', fontSize: 12, mb: 0.6 }}>Note</Typography>
            <TextField fullWidth placeholder='Optional note...' multiline minRows={3} 
            size='small' 
            onChange={handleChange}
              name='note'
              value={formData.note}
            sx={inputSx} />
          </Box>
        </Stack>
      </DialogContent>

      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          py: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 1.2,
          flexWrap: 'wrap',
        }}
      >
        <Button
          onClick={onClose}
          variant='outlined'
          sx={{
            borderColor: 'rgba(73, 99, 151, 0.6)',
            color: '#B5C4E5',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': { borderColor: '#5E7FC1', bgcolor: 'rgba(22, 36, 72, 0.35)' },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={addTransaction}
          variant='contained'
          sx={{
            bgcolor: '#F4A20D',
            color: '#11182D',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 700,
            px: 2.4,
            '&:hover': { bgcolor: '#E49607' },
          }}
        >
          {loading ? "Transaction being recorded..." : "Save Transaction"}
        </Button>
      </Box>
    </Dialog>
  )
}

export default AddTransactionModal

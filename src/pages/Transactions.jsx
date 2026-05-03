import { Box, Button, Checkbox, Chip, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import AddTransactionModal from '../components/AddTransactionModal'
import axios from 'axios'


const filterOptions = ['All', 'Expenses', 'Income']

const Transactions = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isDeleteMode, setIsDeleteMode] = useState(false)

  useEffect(() => {
    const fetchTransactions = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')

      const response = await axios.get("http://localhost:5000/api/getAllTransactions", 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(response.data)
      setTransactions(response.data.transactions)

    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || "Transaction failed!")

    } finally {
      setLoading(false)
    }
    }

    fetchTransactions()
  }, [])

  const amtFormatter = (amt) => {
    if(!amt) return '—'

    if(typeof amt === 'object' && amt.$numberDecimal) {
      return Number(amt.$numberDecimal)
    }
    return Number(amt)
  }

  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 1.6 }, height: '100%', overflow: 'auto' }}>
        <Box>
          <Typography sx={{ fontSize: 18, color: '#F5F8FF', fontWeight: 700 }}>Transactions</Typography>
          <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>All your money movements in one place</Typography>
        </Box>

       <Paper
        sx={{
          mt: 1.2,
          borderRadius: '14px',
          border: '1px solid rgba(62, 90, 144, 0.35)',
          bgcolor: 'rgba(10, 22, 49, 0.88)',
          boxShadow: 'none',
          p: { xs: 2, sm: 2.25 },
        }}
      >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.25}
            alignItems={{ xs: 'stretch', md: 'center' }}
            sx={{ gap: { md: 1.5 } }}
          >
            <Stack
              direction='row'
              spacing={0.8}
              sx={{
                flexWrap: 'wrap',
                rowGap: 1,
                alignItems: 'center',
                flexShrink: 0,
                order: { xs: 1, md: 0 },
              }}
            >
              {filterOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  onClick={() => setActiveFilter(option)}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: activeFilter === option ? '#F4A20D' : 'rgba(33, 53, 92, 0.7)',
                    color: activeFilter === option ? '#0F1A35' : '#9FB2D9',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: activeFilter === option ? '#E49607' : 'rgba(33, 53, 92, 0.85)',
                    },
                  }}
                />
              ))}
            </Stack>

            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                order: { xs: 2, md: 0 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextField
                fullWidth
                size='small'
                placeholder='Search transactions...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant='outlined'
                sx={{
                  maxWidth: { md: 440, lg: 520 },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    bgcolor: 'rgba(33, 53, 92, 0.6)',
                    color: '#EAF0FF',
                    '& fieldset': { borderColor: 'rgba(62, 90, 144, 0.45)' },
                    '&:hover fieldset': { borderColor: 'rgba(90, 120, 180, 0.55)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(244, 162, 13, 0.65)' },
                  },
                  '& .MuiOutlinedInput-input::placeholder': {
                    color: '#8EA3CC',
                    opacity: 1,
                  },
                }}
              />
            </Box>

            <Stack
              direction='row'
              spacing={1}
              sx={{
                flexShrink: 0,
                order: { xs: 3, md: 0 },
                alignItems: 'center',
                justifyContent: { xs: 'stretch', sm: 'flex-end' },
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant='contained'
                onClick={() => setIsAddModalOpen(true)}
                sx={{
                  flex: { xs: 1, sm: 'none' },
                  bgcolor: '#F4A20D',
                  color: '#0F1A35',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2.25,
                  py: 1.15,
                  whiteSpace: 'nowrap',
                  '&:hover': { bgcolor: '#E49607' },
                }}
              >
                Add Transaction
              </Button>
              <Button
                variant={isDeleteMode ? 'contained' : 'outlined'}
                onClick={() => setIsDeleteMode((v) => !v)}
                sx={{
                  flex: { xs: 1, sm: 'none' },
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2.25,
                  py: 1.15,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  ...(isDeleteMode
                    ? {
                        bgcolor: 'rgba(255, 107, 107, 0.22)',
                        color: '#FF9B9B',
                        border: '1px solid rgba(255, 107, 107, 0.45)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 107, 107, 0.32)',
                          border: '1px solid rgba(255, 107, 107, 0.55)',
                        },
                      }
                    : {
                        color: '#FF9B9B',
                        borderColor: 'rgba(255, 107, 107, 0.45)',
                        '&:hover': {
                          borderColor: 'rgba(255, 107, 107, 0.65)',
                          bgcolor: 'rgba(255, 107, 107, 0.08)',
                        },
                      }),
                }}
              >
                {isDeleteMode ? 'Cancel' : 'Delete'}
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <Paper
          sx={{
            mt: 1.2,
            minHeight: transactions.length === 0 && !loading ? 320 : 430,
            borderRadius: '14px',
            border: '1px solid rgba(62, 90, 144, 0.35)',
            bgcolor: 'rgba(10, 22, 49, 0.88)',
            boxShadow: 'none',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {loading ? (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 200,
              }}
            >
              <Typography sx={{ color: '#8EA3CC' }}>Loading...</Typography>
            </Box>
          ) : transactions.length === 0 ? (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                py: { xs: 3, sm: 4 },
                px: 1,
              }}
            >
              <Box
                sx={{
                  width: 108,
                  height: 108,
                  borderRadius: '50%',
                  bgcolor: 'rgba(33, 53, 92, 0.7)',
                  display: 'grid',
                  placeItems: 'center',
                  mb: 2,
                }}
              >
                <Typography sx={{ fontSize: 42, lineHeight: 1 }}>💸</Typography>
              </Box>

              <Typography
                sx={{
                  color: '#F5F8FF',
                  fontWeight: 700,
                  fontSize: 22,
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                No expenses found
              </Typography>

              <Typography
                sx={{
                  color: '#7F93BD',
                  fontSize: 14,
                  mt: 1,
                  mb: 0.5,
                  maxWidth: 420,
                  mx: 'auto',
                  textAlign: 'center',
                  lineHeight: 1.5,
                }}
              >
                You have not recorded any expenses for this period.
              </Typography>

              <Button
                onClick={() => setIsAddModalOpen(true)}
                variant='contained'
                sx={{
                  mt: 2.25,
                  alignSelf: 'center',
                  width: 'auto',
                  minWidth: 160,
                  px: 3,
                  py: 1.25,
                  textTransform: 'none',
                  borderRadius: '10px',
                  bgcolor: '#F4A20D',
                  color: '#0F1A35',
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#E49607' },
                }}
              >
                Add Transaction
              </Button>
            </Box>
          ) : (
            // ✅ SHOW TRANSACTIONS
            <Stack spacing={1.2}>
              {transactions.map((tx) => (
                <Paper
                  key={tx._id}
                  sx={{
                    p: 1.5,
                    borderRadius: '10px',
                    bgcolor: 'rgba(33, 53, 92, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                  }}
                >
                  {isDeleteMode && (
                    <Checkbox
                      size='small'
                      sx={{
                        p: 0.5,
                        color: 'rgba(142, 163, 204, 0.7)',
                        '&.Mui-checked': { color: '#F4A20D' },
                      }}
                    />
                  )}
                  <Box sx={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1.5 }}>
                    <Box>
                      <Typography sx={{ color: '#EAF0FF', fontWeight: 600 }}>
                        {tx.title}
                      </Typography>
                      <Typography sx={{ color: '#8EA3CC', fontSize: 13 }}>
                        {tx.category ?? '—'} • {tx.transactionType}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: tx.transactionType === 'Expense' ? '#FF6B6B' : '#4ADE80',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ₹{amtFormatter(tx.amount)}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          )}
        </Paper>

        <AddTransactionModal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      </Box>
    </Box>
  )
}

export default Transactions
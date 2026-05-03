import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import AddTransactionModal from '../components/AddTransactionModal'
import axios from 'axios'


const filterOptions = ['All', 'Income', 'Expenses', 'Transfers']

const Transactions = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)

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
          >
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                borderRadius: '8px',
                bgcolor: 'rgba(33, 53, 92, 0.6)',
                px: 1.1,
                py: 1,
                color: '#8EA3CC',
                fontSize: 13,
              }}
            >
              Search transactions...
            </Box>
            <Stack
              direction='row'
              spacing={0.8}
              sx={{ flexWrap: 'wrap', rowGap: 1, alignItems: 'center' }}
            >
              {filterOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  sx={{
                    bgcolor: option === 'Expenses' ? '#F4A20D' : 'rgba(33, 53, 92, 0.7)',
                    color: option === 'Expenses' ? '#0F1A35' : '#9FB2D9',
                    fontWeight: 600,
                  }}
                />
              ))}
              <Button
                variant='contained'
                onClick={() => setIsAddModalOpen(true)}
                sx={{
                  ml: { xs: 0, md: 0.5 },
                  flexShrink: 0,
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
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
                    }}
                  >
                    ₹{amtFormatter(tx.amount)}
                  </Typography>
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
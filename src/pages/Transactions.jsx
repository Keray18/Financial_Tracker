import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'

const filterOptions = ['All', 'Income', 'Expenses', 'Transfers']

const Transactions = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 1.6 }, height: '100%', overflow: 'auto' }}>
        <Box>
          <Typography sx={{ fontSize: 18, color: '#F5F8FF', fontWeight: 700 }}>Transactions</Typography>
          <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>All your money movements in one place</Typography>
        </Box>

        <Paper
          sx={{
            mt: 1.3,
            p: 1.2,
            borderRadius: '12px',
            border: '1px solid rgba(62, 90, 144, 0.35)',
            bgcolor: 'rgba(10, 22, 49, 0.88)',
            boxShadow: 'none',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} alignItems={{ md: 'center' }}>
            <Box
              sx={{
                flex: 1,
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
            <Stack direction='row' spacing={0.8} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
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
            </Stack>
          </Stack>
        </Paper>

        <Paper
          sx={{
            mt: 1.2,
            minHeight: 430,
            borderRadius: '14px',
            border: '1px solid rgba(62, 90, 144, 0.35)',
            bgcolor: 'rgba(10, 22, 49, 0.88)',
            boxShadow: 'none',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            p: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                width: 108,
                height: 108,
                borderRadius: '50%',
                bgcolor: 'rgba(33, 53, 92, 0.7)',
                display: 'grid',
                placeItems: 'center',
                mx: 'auto',
                mb: 1.3,
              }}
            >
              <Typography sx={{ fontSize: 42 }}>💸</Typography>
            </Box>
            <Typography sx={{ color: '#F5F8FF', fontWeight: 700, fontSize: 22 }}>No expenses found</Typography>
            <Typography sx={{ color: '#7F93BD', fontSize: 14, mt: 0.8, maxWidth: 460 }}>
              You have not recorded any expenses for this period. Try switching the filter or add a new transaction.
            </Typography>
            <Button
              variant='contained'
              sx={{
                mt: 1.8,
                bgcolor: '#F4A20D',
                color: '#0F1A35',
                fontWeight: 700,
                borderRadius: '8px',
                px: 2.2,
                '&:hover': { bgcolor: '#E99809' },
              }}
            >
              Add Transaction
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Transactions

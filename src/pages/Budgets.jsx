import { Box, Button, Paper, Stack, Typography } from '@mui/material'

const budgetCards = [
  { name: 'Housing', spent: 850, limit: 1500, color: '#25D173' },
  { name: 'Food & Dining', spent: 624.5, limit: 800, color: '#F4A20D' },
  { name: 'Transport', spent: 188.2, limit: 400, color: '#25D173' },
  { name: 'Entertainment', spent: 298.4, limit: 300, color: '#FF6E81', over: true },
  { name: 'Shopping', spent: 340, limit: 500, color: '#F4A20D' },
  { name: 'Health', spent: 140.1, limit: 200, color: '#F4A20D' },
]

const panelSx = {
  borderRadius: '16px',
  border: '1px solid rgba(62, 90, 144, 0.35)',
  bgcolor: 'rgba(10, 22, 49, 0.88)',
  boxShadow: 'none',
}

const Budgets = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ px: { xs: 2, md: 3.5 }, py: { xs: 2.2, md: 2.2 }, height: '100%', overflow: 'auto' }}>
        <Stack direction='row' alignItems='flex-start' justifyContent='space-between' sx={{ mb: 2 }}>
          <Box>
            <Typography sx={{ fontSize: 18, color: '#F5F8FF', fontWeight: 700 }}>Budgets</Typography>
            <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>Set limits, track spending, stay in control</Typography>
          </Box>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#F4A20D',
              color: '#0F1A35',
              fontWeight: 700,
              borderRadius: '10px',
              height: 42,
              px: 2.3,
              minWidth: 178,
              textTransform: 'none',
              boxShadow: '0 8px 20px rgba(244, 162, 13, 0.24)',
              '&:hover': { bgcolor: '#E99809' },
            }}
          >
            Create New Budget
          </Button>
        </Stack>

        <Paper sx={{ ...panelSx, p: { xs: 1.6, md: 1.9 } }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.7, sm: 3.2 }}>
            <Box>
              <Typography sx={{ color: '#8092B8', fontSize: 11 }}>Total Budgeted</Typography>
              <Typography sx={{ color: '#F6FAFF', fontWeight: 700, fontSize: 18 }}>$5,500.00</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: '#8092B8', fontSize: 11 }}>Total Spent</Typography>
              <Typography sx={{ color: '#FF6E81', fontWeight: 700, fontSize: 18 }}>$3,241.20</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: '#8092B8', fontSize: 11 }}>Remaining</Typography>
              <Typography sx={{ color: '#25D173', fontWeight: 700, fontSize: 18 }}>$2,258.80</Typography>
            </Box>
          </Stack>
        </Paper>

        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', xl: 'repeat(2, minmax(0, 1fr))' }, gap: 1.5 }}>
          {budgetCards.map((budget) => {
            const percentage = Math.min((budget.spent / budget.limit) * 100, 100)
            return (
              <Paper
                key={budget.name}
                sx={{
                  ...panelSx,
                  p: { xs: 1.6, md: 1.9 },
                  borderColor: budget.over ? 'rgba(255, 110, 129, 0.6)' : panelSx.border,
                  minHeight: 146,
                }}
              >
                <Stack direction='row' justifyContent='space-between' alignItems='flex-start'>
                  <Box>
                    <Typography sx={{ color: '#F6FAFF', fontWeight: 700, fontSize: 15, mb: 0.35 }}>{budget.name}</Typography>
                    <Typography sx={{ color: '#8FA4CD', fontSize: 12.3 }}>
                      ${budget.spent.toFixed(2)} of ${budget.limit.toFixed(2)}
                    </Typography>
                  </Box>
                  {budget.over ? (
                    <Box
                      sx={{
                        px: 1.05,
                        py: 0.48,
                        borderRadius: '7px',
                        bgcolor: 'rgba(95, 22, 34, 0.52)',
                        color: '#FF6E81',
                        fontSize: 10.8,
                        lineHeight: 1,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Over budget
                    </Box>
                  ) : null}
                </Stack>

                <Box sx={{ mt: 1.45, height: 8, borderRadius: '999px', bgcolor: 'rgba(58, 80, 122, 0.35)' }}>
                  <Box sx={{ height: '100%', width: `${percentage}%`, borderRadius: 'inherit', bgcolor: budget.color }} />
                </Box>

                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: 1 }}>
                  <Typography sx={{ color: budget.color, fontWeight: 700, fontSize: 12 }}>{percentage.toFixed(1)}%</Typography>
                  <Typography sx={{ color: budget.over ? '#FF6E81' : '#25D173', fontSize: 12, fontWeight: 500 }}>
                    ${(budget.limit - budget.spent).toFixed(2)} left
                  </Typography>
                </Stack>
              </Paper>
            )
          })}
        </Box>

        <Paper sx={{ ...panelSx, mt: 1.8, p: 1.35, borderColor: 'rgba(37, 209, 115, 0.45)', bgcolor: 'rgba(7, 29, 25, 0.72)' }}>
          <Typography sx={{ color: '#6DE1A0', fontSize: 13, lineHeight: 1.5 }}>
            Tip: You are on track with 4 budgets. Entertainment is near limit; consider reducing streaming subscriptions.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default Budgets

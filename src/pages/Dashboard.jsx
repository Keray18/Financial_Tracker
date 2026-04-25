import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

const menuItems = ['Dashboard', 'Accounts', 'Transactions', 'Analytics', 'Budgets', 'Settings']

const statCards = [
  {
    title: 'Total Balance',
    value: '$48,290.50',
    trend: '+2.4% this month',
    trendColor: '#1cd36d',
    trendBg: 'rgba(10, 74, 38, 0.55)',
  },
  {
    title: 'Monthly Income',
    value: '$8,500.00',
    trend: '+2.7% vs last month',
    trendColor: '#1cd36d',
    trendBg: 'rgba(10, 74, 38, 0.55)',
  },
  {
    title: 'Total Expenses',
    value: '$3,241.20',
    trend: '-5.3% vs last month',
    trendColor: '#ff6577',
    trendBg: 'rgba(95, 22, 34, 0.52)',
  },
  {
    title: 'Savings Rate',
    value: '61.9%',
    trend: '+3.2% improvement',
    trendColor: '#1cd36d',
    trendBg: 'rgba(10, 74, 38, 0.55)',
  },
]

const bars = [
  { month: 'Nov', height: 66, active: false },
  { month: 'Dec', height: 104, active: false },
  { month: 'Jan', height: 48, active: false },
  { month: 'Feb', height: 94, active: false },
  { month: 'Mar', height: 76, active: false },
  { month: 'Apr', height: 134, active: true },
]

const breakdown = [
  { label: 'Housing', value: 34, color: '#F2A316' },
  { label: 'Food', value: 22, color: '#10C59C' },
  { label: 'Transport', value: 16, color: '#5794FF' },
  { label: 'Entertainment', value: 15, color: '#EA4EA3' },
  { label: 'Other', value: 13, color: '#8EA2C8' },
]

const transactions = [
  { merchant: 'Netflix Subscription', category: 'Entertainment', date: 'Apr 25', amount: '-$15.99', plus: false },
  { merchant: 'Salary Deposit', category: 'Income', date: 'Apr 24', amount: '+$8,500.00', plus: true },
  { merchant: 'Grocery Store', category: 'Food & Dining', date: 'Apr 23', amount: '-$142.30', plus: false },
  { merchant: 'Freelance Payment', category: 'Income', date: 'Apr 22', amount: '+$1,200.00', plus: true },
]

const panelSx = {
  borderRadius: '14px',
  border: '1px solid rgba(62, 90, 144, 0.35)',
  bgcolor: 'rgba(10, 22, 49, 0.88)',
  boxShadow: 'none',
}

const Dashboard = () => {
  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '260px 1fr' },
        background:
          'radial-gradient(circle at 85% 82%, rgba(55, 72, 122, 0.4) 0%, rgba(6, 14, 34, 0.95) 34%, #030816 100%)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          borderRight: '1px solid rgba(58, 86, 138, 0.4)',
          px: 2,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(180deg, rgba(10,24,52,0.92), rgba(8,19,43,0.94))',
          overflow: 'hidden',
        }}
      >
        <Stack direction='row' spacing={1.2} alignItems='center' sx={{ px: 0.8 }}>
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: '7px',
              bgcolor: '#F4A20D',
              color: '#0A122B',
              fontWeight: 800,
              fontSize: 10,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            FT
          </Box>
          <Typography sx={{ fontWeight: 600, color: '#F2F6FF', fontSize: 28 / 2 }}>FinTrack</Typography>
        </Stack>

        <Stack spacing={0.55} sx={{ mt: 2.2 }}>
          {menuItems.map((item, i) => (
            <Button
              key={item}
              variant={i === 0 ? 'contained' : 'text'}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                borderRadius: '8px',
                px: 1.6,
                py: 0.95,
                color: i === 0 ? '#10172B' : '#95A6C8',
                bgcolor: i === 0 ? '#F4A20D' : 'transparent',
                fontSize: 14,
                '&:hover': {
                  bgcolor: i === 0 ? '#E99809' : 'rgba(31, 54, 96, 0.28)',
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', px: 0.8 }}>
          <Stack direction='row' spacing={1.1} alignItems='center'>
            <Avatar sx={{ width: 30, height: 30, bgcolor: '#1F335B', color: '#F2A316', fontSize: 13 }}>
              HG
            </Avatar>
            <Box>
              <Typography sx={{ color: '#E0E8FA', fontSize: 13, lineHeight: 1.25 }}>Hizen Ghoul</Typography>
              <Typography sx={{ color: '#6D81AA', fontSize: 12 }}>Pro Account</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 2, md: 3 },
          py: { xs: 2, md: 1.6 },
          height: '100dvh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack direction='row' alignItems='flex-start' sx={{ width: '100%' }}>
          <Box>
            <Typography sx={{ fontSize: 36 / 2, color: '#F5F8FF', fontWeight: 700 }}>
              Good Morning, Hizen 👋
            </Typography>
            <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>
              Friday, April 25, 2026 - Here&apos;s your financial overview
            </Typography>
          </Box>
          <Stack direction='row' spacing={1} sx={{ ml: 'auto', mr: 0, mt: 0.1 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '10px',
                border: '1px solid rgba(62, 90, 144, 0.35)',
                bgcolor: 'rgba(12, 27, 58, 0.95)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: 13 }}>🔔</Typography>
            </Box>
            <Avatar
              sx={{
                width: 34,
                height: 34,
                bgcolor: 'rgba(30, 50, 89, 0.95)',
                color: '#F2A316',
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              HG
            </Avatar>
          </Stack>
        </Stack>

        <Box
          sx={{
            mt: 1.2,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(4, 1fr)' },
            gap: 1.1,
          }}
        >
          {statCards.map((card, i) => (
            <Paper
              key={card.title}
              sx={{
                ...panelSx,
                p: 1.4,
                borderTop: i === 0 ? '2px solid #F4A20D' : panelSx.border,
              }}
            >
              <Typography sx={{ color: '#8092B8', fontSize: 12.2 }}>{card.title}</Typography>
              <Typography sx={{ color: '#F6FAFF', fontWeight: 700, fontSize: 35 / 2, mt: 0.3 }}>
                {card.value}
              </Typography>
              <Chip
                label={card.trend}
                size='small'
                sx={{
                  mt: 1,
                  height: 22,
                  borderRadius: '6px',
                  color: card.trendColor,
                  bgcolor: card.trendBg,
                  fontSize: 11,
                }}
              />
            </Paper>
          ))}
        </Box>

        <Box
          sx={{
            mt: 1.1,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.1fr 1fr' },
            gap: 1.1,
          }}
        >
          <Paper sx={{ ...panelSx, p: 2 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 22 / 2 }}>Spending Overview</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.2 }}>Last 6 months</Typography>
            <Box sx={{ borderRadius: '10px', bgcolor: 'rgba(34, 51, 89, 0.5)', p: 1.2 }}>
              <Stack direction='row' spacing={1} alignItems='flex-end' sx={{ height: 136 }}>
                {bars.map((bar) => (
                  <Box key={bar.month} sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                    <Box
                      sx={{
                        width: '100%',
                        height: bar.height,
                        borderRadius: '8px',
                        bgcolor: bar.active ? '#F4A20D' : '#3D5A91',
                        boxShadow: bar.active ? '0 0 0 1px rgba(244,162,13,0.45) inset' : 'none',
                      }}
                    />
                  </Box>
                ))}
              </Stack>
              <Stack direction='row' spacing={1} sx={{ mt: 0.9 }}>
                {bars.map((bar) => (
                  <Box key={`${bar.month}-label`} sx={{ flex: 1, textAlign: 'center' }}>
                    <Typography sx={{ color: '#6F83AD', fontSize: 11 }}>{bar.month}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Paper>

          <Paper sx={{ ...panelSx, p: 2 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 22 / 2 }}>Spending Breakdown</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.4 }}>April 2026</Typography>
            <Stack spacing={1.35}>
              {breakdown.map((row) => (
                <Box key={row.label}>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{ mb: 0.5, minHeight: 24 }}
                  >
                    <Stack direction='row' spacing={1} alignItems='center' sx={{ minWidth: 0, flex: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: row.color }} />
                      <Typography sx={{ color: '#DFE8FC', fontSize: 14, lineHeight: 1.2 }}>{row.label}</Typography>
                    </Stack>
                    <Typography
                      sx={{
                        color: row.color,
                        fontSize: 13,
                        fontWeight: 700,
                        lineHeight: 1,
                        minWidth: 34,
                        textAlign: 'right',
                        flexShrink: 0,
                        ml: 1,
                      }}
                    >
                      {row.value}%
                    </Typography>
                  </Stack>
                  <Box sx={{ height: 3, borderRadius: '999px', bgcolor: 'rgba(58, 80, 122, 0.4)' }}>
                    <Box sx={{ height: '100%', width: `${row.value}%`, borderRadius: 'inherit', bgcolor: row.color }} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>

        <Paper sx={{ ...panelSx, mt: 1.1, overflow: 'hidden', flex: 1, minHeight: 0 }}>
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ px: 2, py: 1.5 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 22 / 2 }}>Recent Transactions</Typography>
            <Button sx={{ color: '#F4A20D', fontSize: 12, p: 0, minWidth: 'auto' }}>View all</Button>
          </Stack>
          <Divider sx={{ borderColor: 'rgba(58, 80, 122, 0.35)' }} />

          <Box sx={{ px: 2, py: 1.1, bgcolor: 'rgba(22, 36, 68, 0.45)' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 0.8fr 0.7fr 0.8fr',
                color: '#7E90B7',
                fontSize: 11,
                textTransform: 'uppercase',
              }}
            >
              <Typography variant='inherit'>Merchant</Typography>
              <Typography variant='inherit'>Category</Typography>
              <Typography variant='inherit'>Date</Typography>
              <Typography variant='inherit' textAlign='right'>
                Amount
              </Typography>
            </Box>
          </Box>

          <Stack sx={{ px: 2 }}>
            {transactions.map((tx, idx) => (
              <Box
                key={tx.merchant}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 0.8fr 0.7fr 0.8fr',
                  alignItems: 'center',
                  py: 1.15,
                  borderBottom: idx === transactions.length - 1 ? 0 : '1px solid rgba(58, 80, 122, 0.25)',
                }}
              >
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Box
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: '6px',
                      bgcolor: 'rgba(41, 61, 102, 0.5)',
                    }}
                  />
                  <Typography sx={{ color: '#DFE8FC', fontSize: 14 }}>{tx.merchant}</Typography>
                </Stack>
                <Chip
                  label={tx.category}
                  size='small'
                  sx={{
                    width: 'fit-content',
                    height: 21,
                    borderRadius: '6px',
                    bgcolor: 'rgba(40, 58, 96, 0.45)',
                    color: '#8EA3CC',
                    fontSize: 11,
                  }}
                />
                <Typography sx={{ color: '#A6B5D4', fontSize: 13 }}>{tx.date}</Typography>
                <Typography
                  sx={{
                    color: tx.plus ? '#25D173' : '#FF6E81',
                    textAlign: 'right',
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {tx.amount}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}

export default Dashboard

import { Avatar, Box, Button, Chip, Divider, Paper, Stack, Typography } from '@mui/material'

const accountsSummary = [
  { title: 'Total Net Worth', value: '$124,850.00', delta: '+4.8% this month', color: '#25D173' },
  { title: 'Cash Available', value: '$18,420.10', delta: 'Across all accounts', color: '#8EA3CC' },
  { title: 'Liabilities', value: '$12,300.00', delta: '-1.2% vs last month', color: '#25D173' },
]

const accounts = [
  { name: 'Primary Checking', bank: 'Chase Bank', type: 'Checking', number: '•••• 1942', balance: '$12,480.25', color: '#4E72B8' },
  { name: 'High Yield Savings', bank: 'Ally Bank', type: 'Savings', number: '•••• 8821', balance: '$36,920.40', color: '#10C59C' },
  { name: 'Credit Card', bank: 'Amex Platinum', type: 'Credit', number: '•••• 7204', balance: '-$2,190.35', color: '#FF6E81' },
  { name: 'Investment Account', bank: 'Vanguard', type: 'Brokerage', number: '•••• 4430', balance: '$77,639.70', color: '#F2A316' },
]

const allocation = [
  { label: 'Cash', value: 28, color: '#4E72B8' },
  { label: 'Investments', value: 54, color: '#F2A316' },
  { label: 'Retirement', value: 14, color: '#10C59C' },
  { label: 'Debt', value: 4, color: '#FF6E81' },
]

const recentAccountActivity = [
  { title: 'Transfer to High Yield Savings', account: 'Primary Checking', date: 'Apr 29', amount: '-$750.00', positive: false },
  { title: 'Salary Credited', account: 'Primary Checking', date: 'Apr 28', amount: '+$8,500.00', positive: true },
  { title: 'Card Payment Received', account: 'Credit Card', date: 'Apr 27', amount: '+$1,200.00', positive: true },
  { title: 'ETF Purchase', account: 'Investment Account', date: 'Apr 26', amount: '-$350.00', positive: false },
]

const panelSx = {
  borderRadius: '14px',
  border: '1px solid rgba(62, 90, 144, 0.35)',
  bgcolor: 'rgba(10, 22, 49, 0.88)',
  boxShadow: 'none',
}

const Accounts = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 1.6 }, height: '100%', overflow: 'auto' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Box>
            <Typography sx={{ fontSize: 18, color: '#F5F8FF', fontWeight: 700 }}>Accounts</Typography>
            <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>Manage all your bank and investment accounts</Typography>
          </Box>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#F4A20D',
              color: '#11182D',
              borderRadius: '8px',
              px: 1.6,
              py: 0.6,
              fontSize: 12,
              '&:hover': { bgcolor: '#E49607' },
            }}
          >
            + Add Account
          </Button>
        </Stack>

        <Box sx={{ mt: 1.2, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 1.1 }}>
          {accountsSummary.map((item) => (
            <Paper key={item.title} sx={{ ...panelSx, p: 1.5 }}>
              <Typography sx={{ color: '#8092B8', fontSize: 12 }}>{item.title}</Typography>
              <Typography sx={{ color: '#F6FAFF', fontWeight: 700, fontSize: 18, mt: 0.35 }}>{item.value}</Typography>
              <Typography sx={{ color: item.color, fontSize: 11.5, mt: 0.65 }}>{item.delta}</Typography>
            </Paper>
          ))}
        </Box>

        <Box sx={{ mt: 1.1, display: 'grid', gridTemplateColumns: { xs: '1fr', xl: '1.5fr 1fr' }, gap: 1.1 }}>
          <Paper sx={{ ...panelSx, p: 1.6 }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.2 }}>
              <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>Linked Accounts</Typography>
              <Chip label='4 active' size='small' sx={{ bgcolor: 'rgba(38, 57, 95, 0.8)', color: '#9DB0D7', fontSize: 10.5 }} />
            </Stack>

            <Stack spacing={0.9}>
              {accounts.map((account) => (
                <Paper
                  key={account.name}
                  sx={{
                    borderRadius: '10px',
                    border: '1px solid rgba(62, 90, 144, 0.28)',
                    bgcolor: 'rgba(17, 33, 67, 0.65)',
                    p: 1.1,
                    boxShadow: 'none',
                  }}
                >
                  <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' spacing={1} alignItems='center' sx={{ minWidth: 0 }}>
                      <Avatar sx={{ width: 28, height: 28, bgcolor: account.color, fontSize: 12, fontWeight: 700 }}>
                        {account.bank[0]}
                      </Avatar>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ color: '#EAF1FF', fontSize: 12.8, fontWeight: 600 }} noWrap>
                          {account.name}
                        </Typography>
                        <Typography sx={{ color: '#7E94C0', fontSize: 11.2 }} noWrap>
                          {account.bank} • {account.number}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography
                        sx={{
                          color: account.balance.startsWith('-') ? '#FF6E81' : '#25D173',
                          fontSize: 13.5,
                          fontWeight: 700,
                        }}
                      >
                        {account.balance}
                      </Typography>
                      <Chip
                        label={account.type}
                        size='small'
                        sx={{ height: 18, mt: 0.2, bgcolor: 'rgba(40, 58, 96, 0.45)', color: '#8EA3CC', fontSize: 10 }}
                      />
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Paper>

          <Paper sx={{ ...panelSx, p: 1.6 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>Portfolio Allocation</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.2 }}>By account class</Typography>
            <Stack spacing={1.05}>
              {allocation.map((item) => (
                <Box key={item.label}>
                  <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 0.5 }}>
                    <Stack direction='row' spacing={0.9} alignItems='center'>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.color }} />
                      <Typography sx={{ color: '#DFE8FC', fontSize: 12.5 }}>{item.label}</Typography>
                    </Stack>
                    <Typography sx={{ color: item.color, fontSize: 12, fontWeight: 700 }}>{item.value}%</Typography>
                  </Stack>
                  <Box sx={{ height: 4, borderRadius: '999px', bgcolor: 'rgba(58, 80, 122, 0.35)' }}>
                    <Box sx={{ height: '100%', width: `${item.value}%`, borderRadius: 'inherit', bgcolor: item.color }} />
                  </Box>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ borderColor: 'rgba(58, 80, 122, 0.35)', my: 1.2 }} />

            <Box sx={{ borderRadius: '10px', bgcolor: 'rgba(22, 38, 74, 0.6)', p: 1.1 }}>
              <Typography sx={{ color: '#96ABD5', fontSize: 11.5 }}>Recommended</Typography>
              <Typography sx={{ color: '#E7EEFF', fontSize: 12.4, mt: 0.25 }}>
                Move $500 to savings to maintain your monthly target allocation.
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Paper sx={{ ...panelSx, mt: 1.1, overflow: 'hidden' }}>
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ px: 2, py: 1.4 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>Recent Account Activity</Typography>
            <Button sx={{ color: '#F4A20D', fontSize: 11.5, p: 0, minWidth: 'auto' }}>View all</Button>
          </Stack>
          <Divider sx={{ borderColor: 'rgba(58, 80, 122, 0.35)' }} />

          <Stack sx={{ px: 2 }}>
            {recentAccountActivity.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  py: 1.05,
                  display: 'grid',
                  gridTemplateColumns: '1.7fr 0.8fr 0.7fr',
                  alignItems: 'center',
                  borderBottom: index === recentAccountActivity.length - 1 ? 0 : '1px solid rgba(58, 80, 122, 0.25)',
                }}
              >
                <Box>
                  <Typography sx={{ color: '#E6EEFF', fontSize: 12.8 }}>{item.title}</Typography>
                  <Typography sx={{ color: '#8095BE', fontSize: 11.2 }}>{item.account}</Typography>
                </Box>
                <Typography sx={{ color: '#A2B3D4', fontSize: 12 }}>{item.date}</Typography>
                <Typography sx={{ textAlign: 'right', color: item.positive ? '#25D173' : '#FF6E81', fontWeight: 700, fontSize: 12.8 }}>
                  {item.amount}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}

export default Accounts

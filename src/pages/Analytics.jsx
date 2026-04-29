import { Box, Chip, Paper, Stack, Typography } from '@mui/material'

const periodOptions = ['This Week', 'This Month', 'Last 3 Months', 'This Year']

const kpiCards = [
  { title: 'Total Spent', value: '$3,241.20', change: '+8.4% vs last month', color: '#FF6E81' },
  { title: 'Avg Daily Spend', value: '$107.37', change: '-3.1% vs last month', color: '#25D173' },
  { title: 'Largest Expense', value: '$850.00', change: 'Rent • Apr 1', color: '#8EA3CC' },
  { title: 'Transactions', value: '47', change: 'This month', color: '#8EA3CC' },
]

const trendBars = [40, 55, 30, 70, 45, 80, 60, 35, 90, 50, 75, 40, 65, 85, 55, 70, 45, 60, 80, 50]

const categoryData = [
  { label: 'Housing', value: '34%', color: '#F2A316' },
  { label: 'Food', value: '22%', color: '#10C59C' },
  { label: 'Transport', value: '16%', color: '#5794FF' },
  { label: 'Entertainment', value: '15%', color: '#EA4EA3' },
  { label: 'Other', value: '13%', color: '#8EA2C8' },
]

const topMerchants = [
  { name: 'DMart', txns: 6, total: '$312.40' },
  { name: 'Swiggy', txns: 11, total: '$284.80' },
  { name: 'Uber', txns: 8, total: '$188.20' },
  { name: 'Zomato', txns: 5, total: '$134.60' },
]

const monthLabels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
const incomeSeries = [6200, 7100, 8400, 7800, 8200, 8500, 8500]
const expenseSeries = [4200, 3800, 5100, 3200, 3600, 3400, 3241]
const trendMax = Math.max(...trendBars)
const monthMax = 9000

const panelSx = {
  borderRadius: '14px',
  border: '1px solid rgba(62, 90, 144, 0.35)',
  bgcolor: 'rgba(10, 22, 49, 0.88)',
  boxShadow: 'none',
}

const Analytics = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 1.6 }, height: '100%', overflow: 'auto' }}>
        <Stack direction='row' alignItems='flex-start' justifyContent='space-between'>
          <Box>
            <Typography sx={{ fontSize: 18, color: '#F5F8FF', fontWeight: 700 }}>Analytics</Typography>
            <Typography sx={{ color: '#6D82AA', fontSize: 13.5 }}>Deep dive into spending trends</Typography>
          </Box>
        </Stack>

        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} sx={{ mt: 1.3, flexWrap: 'wrap', rowGap: 1 }}>
          <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
            {periodOptions.map((option, idx) => (
              <Chip
                key={option}
                label={option}
                sx={{
                  bgcolor: idx === 1 ? '#F4A20D' : 'rgba(33, 53, 92, 0.7)',
                  color: idx === 1 ? '#0F1A35' : '#9FB2D9',
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
          <Chip label='Export Report' sx={{ bgcolor: 'rgba(33, 53, 92, 0.7)', color: '#DCE6FF', ml: 'auto' }} />
        </Stack>

        <Box sx={{ mt: 1.2, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(4, 1fr)' }, gap: 1.1 }}>
          {kpiCards.map((card) => (
            <Paper key={card.title} sx={{ ...panelSx, p: 1.4 }}>
              <Typography sx={{ color: '#8092B8', fontSize: 12 }}>{card.title}</Typography>
              <Typography sx={{ color: '#F6FAFF', fontWeight: 700, fontSize: 17, mt: 0.3 }}>{card.value}</Typography>
              <Typography sx={{ color: card.color, fontSize: 11.3, mt: 0.6 }}>{card.change}</Typography>
            </Paper>
          ))}
        </Box>

        <Box sx={{ mt: 1.1, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.6fr 1fr' }, gap: 1.1 }}>
          <Paper sx={{ ...panelSx, p: 2 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>Spending Trend</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.2 }}>Daily spend - April 2026</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '34px 1fr', columnGap: 1.1 }}>
              <Stack justifyContent='space-between' sx={{ height: 182, pt: 0.5 }}>
                {['$180', '$120', '$60', '$0'].map((label) => (
                  <Typography key={label} sx={{ color: '#6E82AB', fontSize: 10, lineHeight: 1, textAlign: 'right' }}>
                    {label}
                  </Typography>
                ))}
              </Stack>

              <Box>
                <Box sx={{ position: 'relative', height: 182 }}>
                  {[0, 1, 2, 3].map((line) => (
                    <Box
                      key={line}
                      sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: `${line * 33.33}%`,
                        borderTop: '1px solid rgba(79, 102, 148, 0.35)',
                      }}
                    />
                  ))}
                  <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'flex-end', gap: 0.65, height: '100%', px: 0.2 }}>
                    {trendBars.map((value, index) => (
                      <Box
                        key={`${value}-${index}`}
                        sx={{
                          width: 14,
                          height: `${Math.max((value / trendMax) * 166, 6)}px`,
                          borderRadius: '5px 5px 0 0',
                          bgcolor: index === 9 ? '#F4A20D' : '#4B6FB3',
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', mt: 0.9 }}>
                  {['Apr 1', 'Apr 7', 'Apr 14', 'Apr 21', 'Apr 28'].map((label) => (
                    <Typography key={label} sx={{ color: '#7288B1', fontSize: 10, textAlign: 'center' }}>
                      {label}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ ...panelSx, p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>By Category</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.1 }}>April breakdown</Typography>
            <Stack spacing={1.05} sx={{ mt: 0.1 }}>
              {categoryData.map((item) => (
                <Box key={item.label}>
                  <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 0.5 }}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                      <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: item.color, flexShrink: 0 }} />
                      <Typography sx={{ color: '#DFE8FC', fontSize: 12.5, minWidth: 88 }}>{item.label}</Typography>
                    </Stack>
                    <Typography sx={{ color: item.color, fontSize: 12, fontWeight: 700, minWidth: 30, textAlign: 'right' }}>
                      {item.value}
                    </Typography>
                  </Stack>
                  <Box sx={{ height: 4, borderRadius: '999px', bgcolor: 'rgba(58, 80, 122, 0.35)' }}>
                    <Box sx={{ height: '100%', width: item.value, borderRadius: 'inherit', bgcolor: item.color }} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>

        <Box sx={{ mt: 1.1, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 1.1 }}>
          <Paper sx={{ ...panelSx, p: 2, bgcolor: 'rgba(13, 27, 59, 0.95)' }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>Top Merchants</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.2 }}>By total spend this month</Typography>

            <Box sx={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(63, 88, 137, 0.35)' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 0.7fr 0.6fr',
                  bgcolor: 'rgba(30, 47, 83, 0.9)',
                  px: 1.1,
                  py: 0.7,
                }}
              >
                <Typography sx={{ color: '#8EA3CC', fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3 }}>MERCHANT</Typography>
                <Typography sx={{ color: '#8EA3CC', fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3 }}>TXNS</Typography>
                <Typography sx={{ color: '#8EA3CC', fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3, textAlign: 'right' }}>TOTAL</Typography>
              </Box>
              <Stack>
                {topMerchants.map((merchant, index) => (
                  <Box
                    key={merchant.name}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 0.7fr 0.6fr',
                      px: 1.1,
                      py: 0.85,
                      bgcolor: index % 2 ? 'rgba(19, 35, 69, 0.75)' : 'transparent',
                      borderTop: '1px solid rgba(63, 88, 137, 0.2)',
                    }}
                  >
                    <Typography sx={{ color: '#E4ECFF', fontSize: 13 }}>{merchant.name}</Typography>
                    <Typography sx={{ color: '#A3B4D8', fontSize: 12.5 }}>{merchant.txns}</Typography>
                    <Typography sx={{ color: '#FF7C8D', fontSize: 13, fontWeight: 700, textAlign: 'right' }}>{merchant.total}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Paper>

          <Paper sx={{ ...panelSx, p: 2 }}>
            <Typography sx={{ color: '#F3F7FF', fontWeight: 700, fontSize: 13 }}>Month-over-Month</Typography>
            <Typography sx={{ color: '#7084AB', fontSize: 12, mb: 1.1 }}>Income vs expenses</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '30px 1fr', columnGap: 1 }}>
              <Stack justifyContent='space-between' sx={{ height: 160, pt: 0.4 }}>
                {['$9k', '$6k', '$3k', '$0'].map((label) => (
                  <Typography key={label} sx={{ color: '#6E82AB', fontSize: 10, lineHeight: 1, textAlign: 'right' }}>
                    {label}
                  </Typography>
                ))}
              </Stack>

              <Box>
                <Box sx={{ position: 'relative', height: 160 }}>
                  {[0, 1, 2, 3].map((line) => (
                    <Box
                      key={line}
                      sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: `${line * 33.33}%`,
                        borderTop: '1px solid rgba(79, 102, 148, 0.35)',
                      }}
                    />
                  ))}

                  <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '100%', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                    {monthLabels.map((month, idx) => (
                      <Box key={month} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 0.35 }}>
                        <Box
                          sx={{
                            width: 9,
                            height: `${Math.max((incomeSeries[idx] / monthMax) * 146, 6)}px`,
                            borderRadius: '4px 4px 0 0',
                            bgcolor: '#4E72B8',
                          }}
                        />
                        <Box
                          sx={{
                            width: 9,
                            height: `${Math.max((expenseSeries[idx] / monthMax) * 146, 6)}px`,
                            borderRadius: '4px 4px 0 0',
                            bgcolor: '#F4A20D',
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', mt: 0.6 }}>
                  {monthLabels.map((month) => (
                    <Typography key={month} sx={{ color: '#7F93BD', fontSize: 10, textAlign: 'center' }}>
                      {month}
                    </Typography>
                  ))}
                </Box>
                <Stack direction='row' spacing={1.4} sx={{ mt: 1 }} alignItems='center'>
                  <Stack direction='row' spacing={0.5} alignItems='center'>
                    <Box sx={{ width: 10, height: 10, borderRadius: '3px', bgcolor: '#4E72B8' }} />
                    <Typography sx={{ color: '#9CB0D8', fontSize: 11 }}>Income</Typography>
                  </Stack>
                  <Stack direction='row' spacing={0.5} alignItems='center'>
                    <Box sx={{ width: 10, height: 10, borderRadius: '3px', bgcolor: '#F4A20D' }} />
                    <Typography sx={{ color: '#9CB0D8', fontSize: 11 }}>Expenses</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default Analytics

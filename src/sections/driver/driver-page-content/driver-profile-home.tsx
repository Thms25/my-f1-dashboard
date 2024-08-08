'use client';

// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
// utils
import { fNumber } from 'src/utils/format-number';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function DriverProfileHome({ driver }: { driver: any }) {
  const renderFollows = (
    <Card sx={{ py: 3, textAlign: 'center', typography: 'h4' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack width={1}>
          {fNumber(driver.details.points)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Career Points
          </Box>
        </Stack>

        <Stack width={1}>
          {fNumber(driver.details.podiums)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Podiums
          </Box>
        </Stack>
      </Stack>
    </Card>
  );

  const renderAbout = (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2}>
          <Iconify icon="mingcute:location-fill" width={24} />

          <Box sx={{ typography: 'body2' }}>
            <Link variant="subtitle2" color="inherit">
              {driver.details.country}
            </Link>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="clarity:date-line" width={24} />

          <Box sx={{ typography: 'body2' }}>{driver.details.date_of_birth}</Box>
        </Stack>
        <Box sx={{ typography: 'body2' }}>{driver.details.bio}</Box>
      </Stack>
    </Card>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={4}>
        <Stack spacing={3}>
          {renderFollows}

          {renderAbout}
        </Stack>
      </Grid>

      <Grid xs={12} md={8}>
        <Stack spacing={3} />
      </Grid>
    </Grid>
  );
}

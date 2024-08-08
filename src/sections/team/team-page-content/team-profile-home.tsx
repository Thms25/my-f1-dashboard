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

// types
import { Team } from '@/utils/types/types';
import DriverCard from './driver-card';

// ----------------------------------------------------------------------

export default function TeamProfileHome({ team }: { team: Team }) {
  const renderFollows = (
    <Card sx={{ py: 3, textAlign: 'center', typography: 'h4' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack width={1}>
          {fNumber(team.details.world_championships)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            World Championships
          </Box>
        </Stack>

        <Stack width={1}>
          {fNumber(team.wins)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            2024 Wins
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
              {team.details.base}
            </Link>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Iconify icon="mdi:history" width={24} />

          <Box sx={{ typography: 'body2' }}>{team.details.first_team_entry}</Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Iconify icon="game-icons:race-car" width={24} />

          <Box sx={{ typography: 'body2' }}>Team Principal: {team.details.team_chief}</Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Iconify icon="oui:apm-trace" width={24} />

          <Box sx={{ typography: 'body2' }}>Technical Chief: {team.details.technical_chief}</Box>
        </Stack>
      </Stack>
    </Card>
  );

  const renderDrivers = (
    <Stack spacing={3} direction="row">
      {team.drivers.map((driver) => (
        <DriverCard key={driver.name} driver={driver} />
      ))}
    </Stack>
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
        <Stack spacing={3}>{renderDrivers}</Stack>
      </Grid>
    </Grid>
  );
}

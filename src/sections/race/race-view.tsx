'use client';

// @mui
import { Avatar, Button, Card, CardHeader, Container, ListItemText, Stack } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
// import StandingsTable from '../home/table/standings-table';
import StatsGrid from '@/components/grid/stats-grid';

// ----------------------------------------------------------------------

export default function RaceView({ race, result }) {
  return (
    <Container maxWidth="xl">
      <Card sx={{ mb: 3 }}>
        <CardHeader
          title={race.meeting_name}
          subheader={race.circuit_short_name}
          avatar={<Iconify icon={race.flag} sx={{ width: 48, height: 48 }} />}
          sx={{ mb: 3 }}
          action={<Button variant="contained">Analyze Race</Button>}
        />
      </Card>
      <Card>
        <CardHeader title="Race Result" subheader="2024 Season" sx={{ mb: 3 }} />
        <StatsGrid
          data={result.map((driver: any) => {
            return {
              id: driver.raceResult,
              rank: driver.raceResult,
              name: driver.name,
              team: driver.team,
              points: driver.points,
            };
          })}
          columns={[
            {
              field: 'rank',
              headerName: 'Rank',
              width: 50,
              editable: false,
            },
            {
              field: 'name',
              headerName: 'Driver',
              minWidth: 200,
              editable: false,
              flex: 1,
              renderCell: (params: any) => (
                <Stack direction={'row'}>
                  <Avatar alt={params.row.name} src={params.row.image} sx={{ mr: 2 }} />

                  <ListItemText
                    primary={params.row.name}
                    secondary={`Driver number: ${params.row.driver_number}`}
                    primaryTypographyProps={{ typography: 'body2' }}
                    secondaryTypographyProps={{
                      component: 'span',
                      color: 'text.disabled',
                    }}
                  />
                </Stack>
              ),
            },
            {
              field: 'team',
              headerName: 'Team',
              minWidth: 120,
              editable: false,
              flex: 1,
            },
            {
              field: 'points',
              headerName: 'Points',
              width: 100,
              editable: false,
            },
          ]}
        />
      </Card>
    </Container>
  );
}

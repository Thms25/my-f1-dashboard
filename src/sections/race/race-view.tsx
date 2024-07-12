// @mui
import { Button, Card, CardHeader, Container } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import StandingsTable from '../home/table/standings-table';
//

// ----------------------------------------------------------------------

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
        <StandingsTable
          data={result}
          head={[
            { id: 'rank', label: 'Rank' },
            { id: 'name', label: 'Driver' },
            { id: 'team', label: 'Team' },
            { id: 'points', label: 'Points' },
          ]}
        />
      </Card>
    </Container>
  );
}

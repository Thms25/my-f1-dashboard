// @mui
// import { useTheme } from '@mui/material/styles';

import { Card, CardHeader, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Hooks
import StandingsTable from './table/standings-table';

// components

// ----------------------------------------------------------------------

type HomeViewProps = {
  driversStandings: any[];
  teamStandings: any[];
};

export default function HomeView({ driversStandings, teamStandings }: HomeViewProps) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} lg={6}>
          <Card>
            <CardHeader
              title="Driver Championship Standings"
              subheader="2024 Season"
              sx={{ mb: 3 }}
            />
            <StandingsTable
              data={driversStandings}
              showSearch
              head={[
                { id: 'rank', label: 'Rank' },
                { id: 'name', label: 'Driver' },
                { id: 'team', label: 'Team' },
                { id: 'points', label: 'Points' },
              ]}
            />
          </Card>
        </Grid>
        <Grid xs={12} lg={6}>
          <Card>
            <CardHeader
              title="Team Championship Standings"
              subheader="2024 Season"
              sx={{ mb: 3 }}
            />
            <StandingsTable
              data={teamStandings}
              head={[
                { id: 'rank', label: 'Rank' },
                { id: 'team', label: 'Team' },
                { id: 'points', label: 'Points' },
              ]}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

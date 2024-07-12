// @mui
// import { useTheme } from '@mui/material/styles';

import { Container } from '@mui/material';
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
          <StandingsTable data={driversStandings} />
        </Grid>
        <Grid xs={12} lg={6}>
          {/* <StandingsTable data={teamStandings} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

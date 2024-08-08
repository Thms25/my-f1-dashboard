// @mui
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Components
import DriverStand from './driver-stand';
import ConstructorStand from './constructor-stand';
import WinsTable from './wins-table';

// ----------------------------------------------------------------------

type HomeViewProps = {
  driversStandings: any[];
  teamStandings: any[];
};

export default function HomeView({ driversStandings, teamStandings }: HomeViewProps) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <WinsTable driversStandings={driversStandings} />
        </Grid>
        <Grid xs={12} md={4}></Grid>
        <Grid xs={12} md={4}></Grid>
        <Grid xs={12} lg={6}>
          <DriverStand driversStandings={driversStandings} />
        </Grid>
        <Grid xs={12} lg={6}>
          <ConstructorStand teamStandings={teamStandings} />
        </Grid>
      </Grid>
    </Container>
  );
}

// @mui
// import { useTheme } from '@mui/material/styles';

import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Hooks
import HomeStandings from './home-standings';

// components

// ----------------------------------------------------------------------

export default function HomeView({ drivers }: { drivers: any }) {
  // const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} lg={12}>
          <HomeStandings
            title="Drivers"
            tableData={drivers}
            tableLabels={[
              { id: '' },
              { id: 'id', label: 'Driver Number' },
              { id: 'category', label: 'Name' },
              { id: 'price', label: 'Team' },
              { id: 'status', label: 'Points' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

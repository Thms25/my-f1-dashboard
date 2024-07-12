import Grid from '@mui/material/Unstable_Grid2';
import DriversTable from './table/drivers-table';
import { Driver } from '@/utils/types/types';
import { Card, CardHeader, Container } from '@mui/material';

type DriversViewProps = {
  drivers: Driver[];
};

export default function DriversView({ drivers }: DriversViewProps) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Card>
            <CardHeader title="2024 F1 Grid" subheader="Current Racing Drivers" sx={{ mb: 3 }} />
            <DriversTable data={drivers} />;
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

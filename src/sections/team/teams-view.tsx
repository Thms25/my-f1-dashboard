import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardHeader, Container } from '@mui/material';
import TeamsList from './teams-list';

type TeamssViewProps = {
  teams: any[];
};

export default function TeamsView({ teams }: TeamssViewProps) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12}>
          {/* <Card> */}
          <CardHeader title="2024 F1 Teams" subheader="10 Teams" sx={{ mb: 3 }} />
          <TeamsList teams={teams} />
          {/* </Card> */}
        </Grid>
      </Grid>
    </Container>
  );
}

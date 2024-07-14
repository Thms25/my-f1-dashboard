// @mui
import { Card, CardHeader, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Hooks
import StandingsTable from './table/standings-table';

// ----------------------------------------------------------------------

type HomeViewProps = {
  driversStandings: any[];
  teamStandings: any[];
};

export default function HomeView({ driversStandings, teamStandings }: HomeViewProps) {
  console.log(teamStandings);
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
              data={driversStandings.map((driver: any) => {
                return {
                  rank: +driver.position,
                  name: driver.Driver.fullName,
                  team: driver.Constructors[0].name,
                  points: +driver.points,
                  image: driver.Driver.image,
                  number: driver.driverNumber || +driver.Driver.permanentNumber,
                };
              })}
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
              data={teamStandings.map((team: any) => {
                return {
                  rank: +team.position,
                  team: team.Constructor.name,
                  points: +team.points,
                };
              })}
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

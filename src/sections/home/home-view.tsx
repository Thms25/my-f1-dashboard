'use client';

// @mui
import { Avatar, Card, CardHeader, Container, ListItemText, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Hooks
import StatsGrid from '@/components/grid/stats-grid';

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
            <StatsGrid
              data={driversStandings.map((driver: any) => {
                return {
                  id: +driver.position,
                  rank: +driver.position,
                  name: driver.Driver.fullName,
                  team: driver.Constructors[0].name,
                  points: +driver.points,
                  image: driver.Driver.image,
                  number: driver.driverNumber || +driver.Driver.permanentNumber,
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
                        secondary={`Driver number: ${params.row.number}`}
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
        </Grid>
        <Grid xs={12} lg={6}>
          <Card>
            <CardHeader
              title="Team Championship Standings"
              subheader="2024 Season"
              sx={{ mb: 3 }}
            />

            <StatsGrid
              data={teamStandings.map((team: any) => {
                return {
                  id: +team.position,
                  rank: +team.position,
                  team: team.Constructor.name,
                  points: +team.points,
                };
              })}
              columns={[
                {
                  field: 'rank',
                  headerName: 'Rank',
                  width: 65,
                  editable: false,
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
        </Grid>
      </Grid>
    </Container>
  );
}

'use client';

// @mui
import { Card, CardHeader } from '@mui/material';

// Hooks
import StatsGrid from '@/components/grid/stats-grid';

// ----------------------------------------------------------------------

type ConstructorStandProps = {
  teamStandings: any[];
};

export default function ConstructorStand({ teamStandings }: ConstructorStandProps) {
  return (
    <Card>
      <CardHeader title="Team Championship Standings" subheader="2024 Season" sx={{ mb: 3 }} />

      <StatsGrid
        data={teamStandings.map((team: any) => {
          return {
            id: team.position,
            rank: team.position,
            team: team.name,
            points: team.points,
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
  );
}

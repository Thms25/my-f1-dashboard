'use client';

// @mui
import { Avatar, Card, CardHeader, ListItemText, Stack, Typography } from '@mui/material';
// import Image from '@/components/image/image';
import Image from 'next/image';

// Hooks
import StatsGrid from '@/components/grid/stats-grid';
import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';

// ----------------------------------------------------------------------

type DriverStandProps = {
  driversStandings: any[];
};

export default function DriverStand({ driversStandings }: DriverStandProps) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader title="Driver Championship Standings" subheader="2024 Season" sx={{ mb: 3 }} />
      <StatsGrid
        data={driversStandings.map((driver: any) => {
          return {
            id: driver.position,
            rank: driver.position,
            name: driver.full_name,
            team: driver.team,
            teamLogo: driver.teamLogo,
            points: driver.points,
            image: driver.image,
            number: driver.number,
            acronym: driver.code,
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
              <Stack
                direction={'row'}
                onClick={() => router.push(paths.driver.details(params.row.acronym))}
                sx={{ cursor: 'pointer' }}
              >
                <Avatar alt={params.row.name} src={params.row.image} sx={{ mr: 2 }} />

                <ListItemText
                  primary={params.row.name}
                  secondary={`Driver number: ${params.row.number}`}
                  primaryTypographyProps={{ typography: 'caption' }}
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
  );
}

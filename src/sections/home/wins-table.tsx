'use client';

// Utils
import { paths } from '@/routes/paths';

// @mui
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardHeader,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

// Hooks
import { useRouter } from 'next/navigation';

// ----------------------------------------------------------------------

type WinsTableProps = {
  driversStandings: any[];
};

export default function WinsTable({ driversStandings }: WinsTableProps) {
  const router = useRouter();
  const winners = driversStandings.filter((driver) => driver.wins > 0);
  const totalWins = winners.reduce((acc, cur) => acc + cur.wins, 0);
  return (
    <Card>
      <CardHeader title="2024 Race Winners" sx={{ mb: 1 }} />
      <Stack spacing={3} sx={{ p: 3, maxHeight: 240, overflow: 'scroll' }}>
        {winners.map((winner) => (
          <Stack key={winner.full_name}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Box
                sx={{ typography: 'overline', cursor: 'pointer' }}
                display={'flex'}
                gap={1}
                alignItems={'center'}
                onClick={() => router.push(paths.driver.details(winner.code))}
              >
                <Avatar alt={winner.full_name} src={winner.image} />
                <Typography variant="caption" noWrap>
                  {winner.full_name}
                </Typography>
              </Box>
              <Box sx={{ typography: 'subtitle1' }}>
                {winner.wins} win{winner.wins > 1 ? 's' : ''}
              </Box>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={(winner.wins / totalWins) * 100}
              color="success"
              sx={{
                height: 8,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.16),
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

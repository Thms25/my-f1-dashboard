import Iconify from '@/components/iconify/iconify';
import { Avatar, Box, Card, Divider, Link, ListItemText, Stack, Typography } from '@mui/material';

export default function TeamsList({ teams }) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {teams.map((team) => (
        <Card>
          <Stack sx={{ p: 2, pb: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="end" sx={{ mb: 2 }}>
              <Avatar
                alt={team.name}
                src={team.logo}
                variant="rounded"
                sx={{ width: 52, height: 52 }}
              />
              <Stack sx={{ display: 'flex' }}>
                <Stack
                  spacing={0.5}
                  direction="row"
                  alignItems="center"
                  sx={{ color: 'primary.main', typography: 'caption', flex: 1 }}
                >
                  123
                </Stack>
                <Link color="inherit" underline="none" href={team.url} target="_blank">
                  <Stack
                    spacing={0.5}
                    flexShrink={0}
                    direction="row"
                    alignItems="center"
                    sx={{
                      color: 'disabled.main',
                      typography: 'caption',
                      flex: 1,
                    }}
                  >
                    1234
                  </Stack>
                </Link>
              </Stack>
            </Stack>

            <ListItemText
              primary={
                <Link href={`/team/${team.id}`} color="inherit">
                  {team.name}
                </Link>
              }
              secondary={team.points + ' PTS'}
              primaryTypographyProps={{
                typography: 'subtitle1',
              }}
              secondaryTypographyProps={{
                mt: 1,
                component: 'span',
                typography: 'caption',
                color: 'text.disabled',
              }}
            />
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Box
            rowGap={1.5}
            display="grid"
            gridTemplateColumns="repeat(1, 1fr)"
            sx={{ p: 2, pb: 2 }}
          >
            <Stack
              spacing={0.5}
              flexShrink={0}
              direction="row"
              alignItems="center"
              sx={{ color: 'text.disabled', minWidth: 0 }}
            >
              <Iconify width={16} icon="cil:chart-line" sx={{ flexShrink: 0 }} />
              <Typography variant="caption" noWrap>
                1234
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              flexShrink={0}
              direction="row"
              alignItems="center"
              sx={{ color: 'text.disabled', minWidth: 0 }}
            >
              <Iconify width={16} icon="solar:users-group-rounded-bold" sx={{ flexShrink: 0 }} />
              <Typography variant="caption" noWrap>
                1234
              </Typography>
            </Stack>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

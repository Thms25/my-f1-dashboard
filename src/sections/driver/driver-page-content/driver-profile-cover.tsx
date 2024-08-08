// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, alpha } from '@mui/material/styles';
// theme
import { bgGradient } from 'src/theme/css';
import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';
import { Driver } from '@/utils/types/types';

// ----------------------------------------------------------------------

type DriverProfileCoverProps = {
  driver: Driver;
  name: string;
  avatarUrl: string;
  team: string;
  coverUrl: string;
  color: string;
};

export default function DriverProfileCover({
  driver,
  name,
  avatarUrl,
  team,
}: DriverProfileCoverProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(`#${driver.color}`, 0.25),
          imgUrl: driver.car,
        }),
        height: 1,
        color: 'common.white',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          left: { md: 24 },
          bottom: { md: 24 },
          zIndex: { md: 10 },
          pt: { xs: 6, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        <Avatar
          src={driver.image}
          alt={name}
          sx={{
            mx: 'auto',
            width: { xs: 64, md: 128 },
            height: { xs: 64, md: 128 },
            border: `solid 2px ${theme.palette.common.white}`,
          }}
        />

        <ListItemText
          sx={{
            mt: 3,
            ml: { md: 3 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
          primary={driver.name}
          secondary={driver.team}
          primaryTypographyProps={{
            typography: 'h3',
            color: 'text.white',
          }}
          secondaryTypographyProps={{
            typography: 'h5',
            color: 'text.secondary',
            component: 'span',
            sx: { cursor: 'pointer' },
            onClick: () => router.push(paths.team.details(driver.team_id)),
          }}
        />
      </Stack>
    </Box>
  );
}

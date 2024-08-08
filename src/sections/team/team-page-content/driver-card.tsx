// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// assets
import { AvatarShape } from 'src/assets/illustrations';
// components
import Image from 'src/components/image/image';
import Iconify from 'src/components/iconify';
import { Driver } from '@/utils/types/types';
import { bgGradient } from '@/theme/css';
import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';

// ----------------------------------------------------------------------

export default function DriverCard({ driver }: { driver: Driver }) {
  const router = useRouter();

  const { name, driver_picture, driver_number, helmet, details, color } = driver;

  return (
    <Card sx={{ textAlign: 'center', width: '100%' }}>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <AvatarShape
          sx={{
            left: 0,
            right: 0,
            zIndex: 10,
            mx: 'auto',
            bottom: -26,
            position: 'absolute',
          }}
        />

        <Avatar
          alt={name}
          src={driver_picture}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
          onClick={() => router.push(paths.driver.details(driver.code))}
        />

        <Image src={helmet} alt={name + '_helmet'} ratio="16/9" overlay={alpha(`#${color}`, 0.2)} />
      </Box>

      <ListItemText
        sx={{ mt: 7, mb: 1 }}
        primary={name}
        secondary={driver_number}
        primaryTypographyProps={{
          typography: 'subtitle1',
          sx: { cursor: 'pointer' },
          onClick: () => router.push(paths.driver.details(driver.code)),
        }}
        secondaryTypographyProps={{ component: 'span', mt: 0.5 }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        sx={{ py: 3, typography: 'subtitle1' }}
      >
        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Career points
          </Typography>
          {+details.points}
        </div>

        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
            Podiums
          </Typography>

          {+details.podiums}
        </div>

        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
            GP raced
          </Typography>
          {+details.grands_prix_entered}
        </div>
      </Box>
    </Card>
  );
}

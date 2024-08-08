// @mui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Iconify from 'src/components/iconify';
import { Driver } from '@/utils/types/types';

// ----------------------------------------------------------------------

type DriversTableRowProps = {
  row: Driver;
  onViewRow: () => void;
};

export default function DriversTableRow({ row, onViewRow }: DriversTableRowProps) {
  const { name, driver_number, team, image, country_code } = row;

  return (
    <TableRow hover>
      <TableCell
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onViewRow()}
      >
        <Avatar alt={name} src={image} sx={{ mr: 2 }} />

        <ListItemText
          primary={name}
          secondary={country_code}
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>

      <TableCell>
        <Box
          onClick={() => onViewRow()}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {team}
        </Box>
      </TableCell>

      <TableCell>
        <Box
          onClick={() => onViewRow()}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {driver_number}
        </Box>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton onClick={() => onViewRow()}>
          <Iconify icon="solar:eye-bold" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

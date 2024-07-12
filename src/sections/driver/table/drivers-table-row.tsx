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
  const { full_name, driver_number, team_name, headshot_url, country_code, name_acronym } = row;

  return (
    <TableRow hover>
      <TableCell
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onViewRow()}
      >
        <Avatar alt={full_name} src={headshot_url} sx={{ mr: 2 }} />

        <ListItemText
          primary={full_name}
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
          {team_name}
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

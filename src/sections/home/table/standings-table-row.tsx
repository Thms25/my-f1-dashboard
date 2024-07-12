// @mui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type DriversTableRowProps = {
  row: any;
  onViewRow: () => void;
};

export default function StandingsTableRow({ row, onViewRow }: DriversTableRowProps) {
  console.log(row);
  const { full_name, driver_number, team_name, headshot_url, points } = row;

  return (
    <TableRow hover>
      <TableCell
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onViewRow()}
      >
        <Avatar alt={full_name} src={headshot_url} sx={{ mr: 2 }} />

        <ListItemText
          primary={full_name}
          secondary={`Driver number: ${driver_number}`}
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
          {points}
        </Box>
      </TableCell>
    </TableRow>
  );
}

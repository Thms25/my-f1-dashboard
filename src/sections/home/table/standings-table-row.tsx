// @mui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

// ----------------------------------------------------------------------

type DriversTableRowProps = {
  row: any;
  onViewRow: () => void;
  rank?: number;
};

export default function StandingsTableRow({ row, onViewRow }: DriversTableRowProps) {
  const { rank, name, team, points, number, image } = row;

  return (
    <TableRow hover>
      <TableCell width={40}>{rank}</TableCell>

      {row.name && (
        <TableCell
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => onViewRow()}
        >
          <Avatar alt={name} src={image} sx={{ mr: 2 }} />

          <ListItemText
            primary={name}
            secondary={`Driver number: ${number}`}
            primaryTypographyProps={{ typography: 'body2' }}
            secondaryTypographyProps={{
              component: 'span',
              color: 'text.disabled',
            }}
          />
        </TableCell>
      )}

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
          {points}
        </Box>
      </TableCell>
    </TableRow>
  );
}

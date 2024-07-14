import { format } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { Race } from '@/utils/types/types';

// ----------------------------------------------------------------------

type RacesTableRowProps = {
  row: Race;
  onViewRow: () => void;
};

export default function RacesTableRow({ row, onViewRow }: RacesTableRowProps) {
  const { circuit_short_name, country_name, flag, completed, date_start } = row;

  const collapse = useBoolean();

  const renderPrimary = (
    <TableRow hover>
      <TableCell
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onViewRow()}
      >
        <Iconify icon={flag} sx={{ mr: 2, height: 40, width: 40 }} />

        <ListItemText
          primary={circuit_short_name}
          secondary={country_name}
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
          {circuit_short_name}
        </Box>
      </TableCell>

      <TableCell>
        <ListItemText
          primary={format(new Date(date_start), 'dd MMM yyyy')}
          secondary={format(new Date(date_start), 'p')}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      </TableCell>

      <TableCell>
        <Label variant="soft" color={completed ? 'success' : 'info'}>
          {completed ? 'Completed' : 'Upcoming'}
        </Label>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton
          color={collapse.value ? 'inherit' : 'default'}
          onClick={collapse.onToggle}
          sx={{
            ...(collapse.value && {
              bgcolor: 'action.hover',
            }),
          }}
        >
          <Iconify icon="eva:arrow-ios-downward-fill" />
        </IconButton>

        <IconButton onClick={() => onViewRow()}>
          <Iconify icon="solar:eye-bold" />
        </IconButton>
      </TableCell>
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: 'none' }} colSpan={8}>
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: 'background.neutral' }}
        >
          <Stack component={Paper} sx={{ m: 1.5 }}>
            {[
              { name: 'Max', pos: 1 },
              {
                name: 'Norris',
                pos: 2,
              },
              {
                name: 'Hamilton',
                pos: 3,
              },
            ].map((item) => (
              <Stack
                key={item.name}
                direction="row"
                alignItems="center"
                sx={{
                  p: (theme) => theme.spacing(1.5, 2, 1.5, 1.5),
                  '&:not(:last-of-type)': {
                    borderBottom: (theme) => `solid 2px ${theme.palette.background.neutral}`,
                  },
                }}
              >
                {/* <Avatar
                  src={item.coverUrl}
                  variant="rounded"
                  sx={{ width: 48, height: 48, mr: 2 }}
                /> */}

                <ListItemText
                  primary={item.name}
                  // secondary={item.sku}
                  primaryTypographyProps={{
                    typography: 'body2',
                  }}
                  secondaryTypographyProps={{
                    component: 'span',
                    color: 'text.disabled',
                    mt: 0.5,
                  }}
                />

                <Box sx={{ width: 110, textAlign: 'right' }}>{item.pos}</Box>
              </Stack>
            ))}
          </Stack>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      {renderSecondary}
    </>
  );
}

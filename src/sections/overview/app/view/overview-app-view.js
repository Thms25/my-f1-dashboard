'use client';

// @mui
// import { useTheme } from '@mui/material/styles';

import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// _mock
import { _appInvoices } from 'src/_mock';
// Hooks
import { useSettingsContext } from 'src/components/settings';

// components
import AppNewInvoice from '../app-new-invoice';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  // const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} lg={12}>
          <AppNewInvoice
            title="New Invoice"
            tableData={_appInvoices}
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

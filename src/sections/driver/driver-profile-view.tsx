'use client';

// Hooks
import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Iconify from 'src/components/iconify';

// components
import DriverProfileCover from './driver-page-content/driver-profile-cover';
import DriverProfileHome from './driver-page-content/driver-profile-home';
import { Driver } from '@/utils/types/types';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'profile',
    label: 'Profile',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'stats',
    label: 'Stats',
    icon: <Iconify icon="akar-icons:statistic-up" width={24} />,
  },
];

// ----------------------------------------------------------------------

export default function DriverProfileView({ driver }: { driver: Driver }) {
  const [currentTab, setCurrentTab] = useState('profile');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          mb: 3,
          height: { xs: 320, md: 280 },
        }}
      >
        <DriverProfileCover
          driver={driver}
          team={driver.team}
          name={driver.name}
          avatarUrl={driver.image}
          coverUrl={driver.car}
          color={driver.color}
        />

        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            width: 1,
            bottom: 3,
            zIndex: 9,
            position: 'absolute',
            // bgcolor: 'background.paper',
            [`& .${tabsClasses.flexContainer}`]: {
              pr: { md: 3 },
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
              },
            },
          }}
        >
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
          ))}
        </Tabs>
      </Card>

      {currentTab === 'profile' && <DriverProfileHome driver={driver} />}
    </Container>
  );
}

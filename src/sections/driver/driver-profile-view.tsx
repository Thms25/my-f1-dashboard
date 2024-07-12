'use client';

// Hooks
import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Iconify from 'src/components/iconify';

// _mock
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from 'src/_mock';

// components
import DriverProfileCover from './driver-profile-cover';
import DriverProfileHome from './driver-profile-home';

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

export default function DriverProfileView({ driver }) {
  const [currentTab, setCurrentTab] = useState('profile');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          mb: 3,
          height: 180,
        }}
      >
        <DriverProfileCover
          team={driver.team_name}
          name={driver.full_name}
          avatarUrl={driver.headshot_url}
        />

        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            width: 1,
            bottom: 3,
            zIndex: 9,
            position: 'absolute',
            bgcolor: 'background.paper',
            [`& .${tabsClasses.flexContainer}`]: {
              pr: { md: 3 },
              justifyContent: {
                sm: 'center',
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

      {currentTab === 'profile' && <DriverProfileHome info={_userAbout} posts={_userFeeds} />}
    </Container>
  );
}

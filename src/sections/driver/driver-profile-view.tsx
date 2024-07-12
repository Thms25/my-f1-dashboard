'use client';

import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//

import ProfileCover from '../user/profile-cover';
import ProfileGallery from '../user/profile-gallery';
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
      <CustomBreadcrumbs
        heading="Profile"
        links={[{ name: 'Driver', href: paths.driver.root }, { name: driver.full_name }]}
        sx={{
          mb: 2,
        }}
      />

      <Card
        sx={{
          mb: 3,
          height: 290,
        }}
      >
        <ProfileCover
          // role={_userAbout.role}
          name={driver.full_name}
          avatarUrl={driver.headshot_url}
          // coverUrl={driver.coverUrl}
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

      {/* {currentTab === 'stats' && <ProfileGallery gallery={_userGallery} />} */}
    </Container>
  );
}

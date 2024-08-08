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
import TeamProfileCover from './team-page-content/team-profile-cover';
import { Team } from '@/utils/types/types';
import TeamProfileHome from './team-page-content/team-profile-home';

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

export default function TeamProfileView({ team }: { team: Team }) {
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
        <TeamProfileCover
          team={team.drivers.map((driver) => driver.name).join(' | ')}
          name={team.name}
          avatarUrl={team.logo}
          coverUrl={team.car}
          color={team.color}
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

      {currentTab === 'profile' && <TeamProfileHome team={team} />}
    </Container>
  );
}

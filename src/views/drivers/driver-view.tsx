'use client'

import BreadCrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import ProfileCaroussel from '@/components/profile/profile-caroussel'
import ProfileHeader from '@/components/profile/profile-header'
import ProfileTabs from '@/components/profile/profile-tabs'
import { Driver, Team } from '@/utilis/types'
import { useState } from 'react'
import DriverOverview from './driver/driver-overview'

type DriversViewTypeProps = {
  driver: Driver
  season: string
}

export default function DriverView({ driver, season }: DriversViewTypeProps) {
  const tabs = ['Overview', 'Statistics', 'Gallery']
  const [currentTab, setCurrentTab] = useState(tabs[0])
  return (
    <Container>
      <BreadCrumb
        items={[
          { name: season, href: `/${season}` },
          { name: 'Drivers', href: `/${season}/drivers` },
          { name: driver.name },
        ]}
      />
      <ProfileHeader
        avatar={driver.picture}
        cover={driver.images[0]}
        title={driver.name}
        subtitle={driver.team}
      />
      <ProfileTabs
        tabs={tabs}
        onTabChange={value => setCurrentTab(value)}
        currentTab={currentTab}
      />
      {currentTab === 'Overview' && <DriverOverview driver={driver} />}
      {currentTab === 'Statistics' && <div>Statistics</div>}
      {currentTab === 'Gallery' && (
        <ProfileCaroussel images={[...driver.images, driver.helmet]} />
      )}
    </Container>
  )
}

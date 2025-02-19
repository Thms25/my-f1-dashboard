import BreadCrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import ProfileHeader from '@/components/profile/profile-header'
import ProfileTabs from '@/components/profile/profile-tabs'
import { Driver, Team } from '@/utilis/types'

type DriversViewTypeProps = {
  driver: Driver
  season: string
}

export default function DriverView({ driver, season }: DriversViewTypeProps) {
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
        tabs={[
          { name: 'Overview', link: `/${season}/drivers/${driver.id}` },
          { name: 'Results', link: `/${season}/drivers/${driver.id}/results` },
          { name: 'Career', link: `/${season}/drivers/${driver.id}/career` },
        ]}
      />
    </Container>
  )
}

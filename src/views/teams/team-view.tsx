import BreadCrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import ProfileHeader from '@/components/profile/profile-header'
import { Driver, Team } from '@/utilis/types'

type TeamViewTypeProps = {
  team: Team
  season: string
}

export default function TeamView({ team, season }: TeamViewTypeProps) {
  return (
    <Container>
      <BreadCrumb
        items={[
          { name: season, href: `/${season}` },
          { name: 'Teams', href: `/${season}/teams` },
          { name: team.name },
        ]}
      />
      <ProfileHeader
        avatar={team.logo}
        cover={team.car}
        title={team.name}
        subtitle={team.drivers.map((driver: any) => driver.name).join(' | ')}
      />
    </Container>
  )
}

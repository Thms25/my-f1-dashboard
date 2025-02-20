import ProfileCaroussel from '@/components/profile/profile-caroussel'
import ProfileInfo from '@/components/profile/profile-info'
import { Driver } from '@/utilis/types'

export default function DriverOverview({ driver }: { driver: Driver }) {
  return (
    <div className="w-full flex gap-4 justify-between">
      <ProfileInfo
        infos={[
          {
            title: 'About',
            content: [
              { key: 'Country', val: driver.info.country },
              { key: 'Date of Birth', val: driver.info.date_of_birth },
              { key: 'Car number', val: driver.number },
            ],
          },
          {
            title: 'Historic Data',
            content: [
              { key: 'Races', val: driver.info.grands_prix_entered },
              { key: 'Podiums', val: driver.info.podiums },
              { key: 'World Title', val: driver.info.world_championships },
            ],
          },
        ]}
        title={driver.name}
        subtitle={driver.team}
        bio={driver.info.bio}
      />
      <ProfileCaroussel images={[...driver.images, driver.helmet]} />
    </div>
  )
}

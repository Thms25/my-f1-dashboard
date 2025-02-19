import { getDriver } from '@/utilis/data-fetching'
import DriverView from '@/views/drivers/driver-view'

export default async function DriverPage({
  params,
}: {
  params: Promise<{ id: string; season: string }>
}) {
  const { id, season } = await params
  const driver = await getDriver(id, season)

  return <DriverView driver={driver} season={season} />
}

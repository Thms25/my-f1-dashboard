'use client'

// components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

// hooks
import { useRouter } from 'next/navigation'

// types
import { Driver, Team } from '@/utilis/types'
import { paths } from '@/utilis/paths'

type DriversStandingsProps = {
  drivers: Driver[]
  teams: Team[]
}

// ---------------------------------------------------------------------

export default function DriversStandings({
  drivers,
  teams,
}: DriversStandingsProps) {
  const tableHead = [
    { title: 'Rank', className: 'w-[40px]' },
    { title: 'Driver', className: 'min-w-[200px]' },
    { title: 'Team', className: 'min-w-[200px]' },
    { title: 'Points', className: 'w-[100px] text-right' },
  ]
  const router = useRouter()

  return (
    <Table className="w-full h-1/2">
      <TableHeader>
        <TableRow className=" font-bold">
          {tableHead.map((head, index) => (
            <TableHead
              key={index}
              className={`${head.className} text-zinc-800`}
            >
              {head.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {drivers.map(driver => {
          const driverTeam = teams.find(
            team => team.id === driver.team.toLowerCase().replaceAll(' ', '_'),
          )

          return (
            <TableRow
              key={driver.id}
              className="text-zinc-800 hover:bg-transparent"
            >
              <TableCell>{driver.rank}</TableCell>
              <TableCell
                className="flex items-center gap-3 cursor-pointer hover:bg-zinc-50"
                onClick={() => router.push(paths.drivers.details(driver.id))}
              >
                <Avatar>
                  <AvatarImage src={driver.picture} alt="driver-picture" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <h4>{driver.name}</h4>
                  <div className="flex items-center - gap-2 text-zinc-500">
                    <div className="w-[28px]">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={driver.info.flag}
                          alt="driver-flag"
                          fill
                          sizes="40px"
                          // className="opacity-80"
                        />
                      </AspectRatio>
                    </div>
                    <p> | {driver.number}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell
                className="hover:bg-zinc-50 cursor-pointer"
                onClick={() => router.push(`/teams/${driverTeam.id}`)}
              >
                <div className="flex items-center gap-2">
                  <div className="w-[48px] h-[48px]">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={driverTeam.logo}
                        alt="team-car"
                        width={48}
                        height={48}
                        className="opacity-80 object-contain"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex flex-col h-[48px]">
                    <h4 className="ml-1 font-semibold text-zinc-600">
                      {driver.team}
                    </h4>
                    <div className="w-[100px] h-[40px]">
                      <Image
                        src={driverTeam.car}
                        alt="team-car"
                        width={140}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">{0}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

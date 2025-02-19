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

type TeamsStandingsProps = {
  drivers: Driver[]
  teams: Team[]
}

// ---------------------------------------------------------------------

export default function TeamsStandings({
  drivers,
  teams,
}: TeamsStandingsProps) {
  const tableHead = [
    { title: 'Rank', className: 'w-[40px]' },
    { title: 'Team', className: 'min-w-[180px]' },
    { title: 'Drivers', className: 'min-w-[140px]' },
    { title: 'Points', className: 'w-[40px] text-right' },
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
        {teams.map(team => {
          // const driversPair = drivers.map(d =>
          //   team.drivers.find(driver => driver.number === d.number),
          // )
          // console.log(driversPair)

          return (
            <TableRow
              key={team.id}
              className="text-zinc-800 hover:bg-transparent"
            >
              <TableCell>{team.rank}</TableCell>
              <TableCell
                className="hover:bg-zinc-50 cursor-pointer"
                onClick={() => router.push(paths.teams.details(team.id))}
              >
                <div className="flex items-center gap-2">
                  <div className="w-[48px] h-[48px]">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={team.logo}
                        alt="team-car"
                        width={48}
                        height={48}
                        className="opacity-80 object-contain"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex flex-col h-[48px]">
                    <h4 className="ml-1 font-semibold text-zinc-600">
                      {team.name}
                    </h4>
                    <div className="w-[100px] h-[40px]">
                      <Image
                        src={team.car}
                        alt="team-car"
                        width={140}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="flex flex-col items-start justify-center gap-1">
                {team.drivers.map((driver: any) => (
                  <div
                    key={driver.name}
                    className="cursor-pointer text-zinc-500 hover:text-zinc-800"
                    onClick={() =>
                      router.push(
                        paths.drivers.details(
                          driver.id ||
                            driver.name.toLowerCase().replaceAll(' ', '_'),
                        ),
                      )
                    }
                  >
                    <h4>
                      {driver.name} | {driver.number}
                    </h4>
                  </div>
                ))}
              </TableCell>

              <TableCell className="text-right">{0}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

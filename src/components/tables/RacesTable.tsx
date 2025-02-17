'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

import { Race } from '@/utilis/types'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { format } from 'date-fns'
import { paths } from '@/utilis/paths'

type racesTableProps = {
  races: Race[]
}

export default function RacesTable({ races }: racesTableProps) {
  const { season } = useParams()
  const [search, setSearch] = useState('')
  const filteredRaces = races.filter(
    race =>
      race.name.toLowerCase().includes(search.toLowerCase()) ||
      race.official_name.toLowerCase().includes(search.toLowerCase()) ||
      race.location.toLowerCase().includes(search.toLowerCase()) ||
      race.round.toString().includes(search) ||
      race.format.toLowerCase().includes(search.toLowerCase()),
  )

  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-zinc-700">
            {season} Race Calendar
          </h2>
          <Input
            placeholder="Search races..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-64"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">Round</TableHead>
              <TableHead>Race</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRaces.map(race => (
              <TableRow
                key={race.round}
                className="hover:bg-zinc-50 cursor-pointer"
                onClick={() =>
                  router.push(paths.races.details(race.round, season))
                }
              >
                <TableCell>{race.round}</TableCell>
                <TableCell className="">
                  <h4>{race.name}</h4>
                  <div className="flex items-center - gap-2 text-zinc-500">
                    <p>{race.location}</p>

                    <p className="text-xl opacity-85">{race.flag}</p>
                  </div>
                </TableCell>
                <TableCell>{format(race.date, 'do MMMM')}</TableCell>
                <TableCell>{race.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

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

import { Race, RaceResult } from '@/utilis/types'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { format } from 'date-fns'
import { paths } from '@/utilis/paths'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type racesTableProps = {
  results: RaceResult[]
  title: string
}

export default function ResultsTable({ results, title }: racesTableProps) {
  const [search, setSearch] = useState('')
  const filteredResults = results.filter(
    race =>
      race.code.toLowerCase().includes(search.toLowerCase()) ||
      race.driver.toLowerCase().includes(search.toLowerCase()) ||
      race.driver_number.toString().includes(search.toLowerCase()) ||
      race.position.toString().includes(search) ||
      race.team.toLowerCase().includes(search.toLowerCase()),
  )

  const router = useRouter()

  return (
    <Card className="my-2">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-zinc-700">{title}</h3>
          <Input
            placeholder="Search results..."
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
              <TableHead>Team</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResults.map(result => (
              <TableRow
                key={result.position}
                className="hover:bg-zinc-50 cursor-pointer"
              >
                <TableCell>{result.position}</TableCell>
                <TableCell
                  className="flex items-center gap-3 cursor-pointer hover:bg-zinc-50"
                  onClick={() =>
                    router.push(paths.drivers.details(result.driver_id))
                  }
                >
                  <Avatar>
                    <AvatarImage src={result.picture} alt="driver-picture" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <h4>{result.driver}</h4>
                    <div className="flex items-center - gap-2 text-zinc-500">
                      <p>Started P{result.grid_position}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{result.team}</TableCell>
                <TableCell>{result.status}</TableCell>
                <TableCell>{result.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

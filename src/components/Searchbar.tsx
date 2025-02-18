'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { searchIcon } from '../../public/svgdata'
import { Input } from './ui/input'
import { useEffect, useState } from 'react'

import { getDrivers, getRaces, getTeams } from '@/utilis/data-fetching'
import { useParams, useRouter } from 'next/navigation'
import { paths } from '@/utilis/paths'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardDescription, CardFooter, CardHeader } from './ui/card'
import { capitalize } from '@/utilis/text-utils'

type searchItem = {
  id: string
  name: string
  url: string
}

export default function Searchbar() {
  const router = useRouter()
  const year = new Date().getFullYear()
  const pathsData = Object.keys(paths).map(key => {
    return {
      id: key,
      name: key,
      url: `/${year}/${key === 'home' ? '' : key}`,
    }
  }) as searchItem[]

  const [searchData, setSearchData] = useState(pathsData)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(searchData)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const drivers_data = await getDrivers()
      const drivers = drivers_data.map((driver: any) => {
        return {
          id: driver.id,
          name: driver.name,
          url: paths.drivers.details(driver.id),
        }
      }) as searchItem[]
      const teams_data = await getTeams()
      const teams = teams_data.map((team: any) => {
        return {
          id: team.id,
          name: team.name,
          url: paths.teams.details(team.id),
        }
      }) as searchItem[]

      const races_data = await getRaces()
      const races = races_data.map((race: any) => {
        return {
          id: race.round,
          name: race.name,
          url: paths.races.details(race.round),
        }
      }) as searchItem[]

      setSearchData([...searchData, ...drivers, ...teams, ...races])
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (search) {
      setSearchResults(
        searchData.filter((driver: any) =>
          driver.name.toLowerCase().includes(search.toLowerCase()),
        ),
      )
    } else {
      setSearchResults(pathsData)
    }
  }, [search])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    if (!isOpen) {
      setSearch('')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{searchIcon}</DialogTrigger>
      <DialogContent className="mx-auto max-h-[500px] w-4/5 md:w-1/2 overflow-hidden">
        <DialogHeader>
          <DialogTitle>
            <Input
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full font-normal"
            />
          </DialogTitle>
          <DialogDescription className="h-0"></DialogDescription>

          {/* Dynamic height adjustment */}
          <ScrollArea
            className={`w-full ${
              searchResults.length > 6
                ? 'max-h-[400px] overflow-y-auto'
                : 'h-auto'
            } rounded-md border-0 py-1`}
          >
            {searchResults.map((result: searchItem) => (
              <Card
                key={result.id}
                onClick={() => {
                  setIsOpen(false)
                  router.push(result.url)
                }}
                className="cursor-pointer rounded-lg shadow-sm py-2 mb-2 hover:bg-zinc-100"
              >
                <CardHeader className="m-0 py-0 text-left">
                  {capitalize(result.name)}
                </CardHeader>
                <CardFooter className="m-0 py-0 text-zinc-400 text-xs">
                  {result.url}
                </CardFooter>
              </Card>
            ))}
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

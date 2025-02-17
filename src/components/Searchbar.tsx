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
import { Card, CardContent, CardDescription } from './ui/card'

export default function Searchbar() {
  const drivers = [
    'Lewis Hamilton',
    'Max Verstappen',
    'Valtteri Bottas',
    'Lando Norris',
    'Sergio Perez',
    'Charles Leclerc',
    'Carlos Sainz',
    'Daniel Ricciardo',
  ]

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(drivers)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (search) {
      setSearchResults(
        drivers.filter((driver: any) =>
          driver.toLowerCase().includes(search.toLowerCase()),
        ),
      )
    } else {
      setSearchResults([])
    }
  }, [search])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{searchIcon}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Input
              placeholder="Search races..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full"
            />
          </DialogTitle>
          {/* <DialogDescription> */}
          {searchResults.map((result: any) => (
            <Card
              key={result}
              className="m-2 p-2 hover:bg-zinc-100 cursor-pointer"
            >
              <CardDescription>{result}</CardDescription>
            </Card>
          ))}
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
